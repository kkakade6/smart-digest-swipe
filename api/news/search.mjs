// api/news/search.mjs

function corsOrigin(req) {
  return req?.headers?.origin || '*'; // loosen for dev; tighten later
}

function ensureIso(s) {
  try {
    if (!s) return new Date().toISOString();
    const d = new Date(s);
    if (isNaN(d)) return new Date().toISOString();
    return d.toISOString();
  } catch {
    return new Date().toISOString();
  }
}

function classify({ title, snippet }) {
  const text = `${title || ''} ${snippet || ''}`.toLowerCase();

  // AI
  if (/\b(ai|llm|model|gpt|llama|genai|openai|anthropic|groq|mistral|agent)\b/.test(text)) {
    return { category: 'AI', subcategory: /chip|nvidia|amd|tsmc/.test(text) ? 'Chips' : 'Models' };
  }
  // Markets
  if (/\b(nasdaq|s&p|dow|treasury|yield|bond|stock|fed|cpi|ppi|earnings)\b/.test(text)) {
    return {
      category: 'Markets',
      subcategory: /earnings|profit|revenue/.test(text) ? 'Equities' : undefined,
    };
  }
  // Tech
  if (
    /\b(apple|microsoft|google|alphabet|amazon|meta|nvidia|amd|tsmc|cloud|saas|chip|semiconductor)\b/.test(
      text,
    )
  ) {
    return {
      category: 'Tech',
      subcategory: /chip|semiconductor/.test(text) ? 'Chips' : 'Big Tech',
    };
  }
  // Policy
  if (
    /\b(congress|white house|ftc|sec|doj|tariff|sanction|regulation|antitrust|tax)\b/.test(text)
  ) {
    return {
      category: 'Policy',
      subcategory: /ftc|sec|doj|antitrust/.test(text) ? 'Regulation' : 'Trade/Taxes',
    };
  }
  // Startups
  if (
    /\b(seed|series [abc]|funding|venture|ipo|m&a|acquisition|layoff|hiring|valuation)\b/.test(text)
  ) {
    return {
      category: 'Startups',
      subcategory: /ipo|m&a|acquisition/.test(text) ? 'IPO/M&A' : 'Funding',
    };
  }
  // Economy
  if (/\b(gdp|inflation|jobs?|housing|pmi|retail sales|manufacturing|unemployment)\b/.test(text)) {
    return {
      category: 'Economy',
      subcategory: /inflation|cpi|ppi/.test(text) ? 'Inflation' : undefined,
    };
  }

  return { category: 'Top', subcategory: 'Daily must-knows' };
}

export default async function handler(req, res) {
  try {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', corsOrigin(req));
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') return res.status(200).end();

    if (req.method !== 'GET') {
      return res.status(405).json({ error: 'Use GET with query params.' });
    }

    const GNEWS_API_KEY = process.env.GNEWS_API_KEY;
    if (!GNEWS_API_KEY) {
      console.error('[search] Missing GNEWS_API_KEY (check Vercel Production env vars).');
      return res.status(500).json({ error: 'Server misconfigured: GNEWS_API_KEY missing.' });
    }

    // Query params
    const q = (req.query?.q ?? '').toString();
    const lang = (req.query?.lang ?? 'en').toString();
    const country = (req.query?.country ?? 'us').toString();
    const maxRaw = parseInt((req.query?.max ?? '10').toString(), 10);
    const max = Math.min(isNaN(maxRaw) ? 10 : maxRaw, 20);
    const sortBy = (req.query?.sortBy ?? 'publishedAt').toString(); // 'publishedAt' | 'relevance' | 'popularity'

    // Build GNews URL
    const apiUrl = new URL('https://gnews.io/api/v4/search');
    if (q) apiUrl.searchParams.set('q', q);
    apiUrl.searchParams.set('lang', lang);
    apiUrl.searchParams.set('country', country);
    apiUrl.searchParams.set('max', String(max));
    apiUrl.searchParams.set('sortby', sortBy);
    apiUrl.searchParams.set('apikey', GNEWS_API_KEY);

    // Call GNews
    const g = await fetch(apiUrl.toString(), { headers: { Accept: 'application/json' } });
    const bodyText = await g.text(); // always read text first for better error logs
    if (!g.ok) {
      console.error('[search] GNews non-OK', g.status, bodyText?.slice(0, 500));
      return res.status(502).json({ error: 'GNews error', status: g.status, detail: bodyText });
    }

    // Parse JSON safely
    let data;
    try {
      data = JSON.parse(bodyText);
    } catch (e) {
      console.error('[search] Failed to parse GNews JSON:', e, bodyText?.slice(0, 500));
      return res.status(502).json({ error: 'Invalid JSON from GNews' });
    }

    const rawArticles = Array.isArray(data?.articles) ? data.articles : [];
    const seen = new Set();
    const items = [];

    for (const a of rawArticles) {
      const url = a?.url;
      if (!url || seen.has(url)) continue;
      seen.add(url);

      const title = a?.title || 'Untitled';
      const snippet = a?.description || a?.content || '';
      const publishedAt = ensureIso(a?.publishedAt);
      const source = (a?.source && a.source.name) || 'Unknown';
      const imageUrl = a?.image;

      const { category, subcategory } = classify({ title, snippet });

      items.push({
        title,
        url,
        snippet,
        publishedAt,
        source,
        imageUrl,
        category,
        subcategory,
      });
    }

    return res.status(200).json({
      query: { q, lang, country, max, sortBy },
      count: items.length,
      items,
      generatedAt: new Date().toISOString(),
    });
  } catch (err) {
    console.error('[search] Uncaught error:', err);
    return res.status(500).json({ error: 'Server exception' });
  }
}
