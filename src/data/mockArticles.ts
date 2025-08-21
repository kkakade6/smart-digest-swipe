import { Article } from '../types/article';

export const mockArticles: Article[] = [
  {
    id: '1',
    headline: 'OpenAI Launches GPT-5 with Unprecedented Reasoning Capabilities',
    bullets: [
      'New model shows 40% improvement in complex reasoning tasks',
      'Features multimodal capabilities including video understanding',
      'Enterprise pricing starts at $200/month for premium features',
      'Rollout begins with ChatGPT Plus subscribers next week',
    ],
    whyItMatters:
      'This marks the biggest leap in AI reasoning since GPT-4, potentially revolutionizing how businesses automate complex decision-making.',
    category: 'AI',
    publishedAt: new Date('2024-01-15T08:00:00Z'),
    isRead: false,
    isSaved: true,
  },
  {
    id: '2',
    headline: 'Tesla Stock Surges 15% on Record Q4 Delivery Numbers',
    bullets: [
      'Delivered 484,507 vehicles in Q4, beating analyst estimates',
      'Full-year deliveries reached 1.81 million, up 38% from 2023',
      'Cybertruck production ramping faster than expected',
      'Musk confirms new $25,000 model timeline for late 2025',
    ],
    whyItMatters:
      'Strong delivery numbers signal Tesla is maintaining dominance despite increased EV competition and economic headwinds.',
    category: 'Markets',
    publishedAt: new Date('2024-01-15T07:30:00Z'),
    isRead: false,
    isSaved: false,
  },
  {
    id: '3',
    headline: 'European Union Passes Landmark AI Regulation Act',
    bullets: [
      'First comprehensive AI law globally takes effect June 2024',
      'Bans high-risk AI applications like social scoring systems',
      'Requires transparency for AI systems used in hiring and lending',
      'Fines up to €35M or 7% of global revenue for violations',
    ],
    whyItMatters:
      'Sets global precedent for AI governance and will likely influence regulations in other major markets.',
    category: 'Policy',
    publishedAt: new Date('2024-01-15T06:45:00Z'),
    isRead: false,
    isSaved: false,
  },
  {
    id: '4',
    headline: 'Anthropic Raises $2B Series C at $18B Valuation',
    bullets: [
      'Led by Google and Spark Capital with participation from Salesforce',
      'Funding will accelerate Claude AI development and safety research',
      'Plans to hire 500+ engineers and researchers this year',
      'Constitutional AI approach gaining traction among enterprises',
    ],
    whyItMatters:
      'Positions Anthropic as a serious OpenAI competitor while highlighting investor appetite for AI safety-focused companies.',
    category: 'Startups',
    publishedAt: new Date('2024-01-15T06:15:00Z'),
    isRead: false,
    isSaved: true,
  },
  {
    id: '5',
    headline: 'Apple Vision Pro Pre-Orders Hit 200K in First Weekend',
    bullets: [
      'Exceeds analyst expectations despite $3,499 price point',
      'Most popular configuration is 512GB model at $3,899',
      'Delivery dates already pushed to March for new orders',
      'Developer interest surges with 1,000+ visionOS apps in pipeline',
    ],
    whyItMatters:
      "Strong early demand validates Apple's bet on spatial computing and could accelerate mainstream AR/VR adoption.",
    category: 'Technology',
    publishedAt: new Date('2024-01-15T05:30:00Z'),
    isRead: false,
    isSaved: false,
  },
  {
    id: '6',
    headline: 'Coinbase Stock Jumps 12% on Bitcoin ETF Approval',
    bullets: [
      "SEC approves 11 spot Bitcoin ETFs including BlackRock's iShares",
      'Coinbase to serve as custodian for multiple ETF providers',
      'Trading volumes surge 300% following approval announcement',
      'Bitcoin price reaches new 2024 high of $48,500',
    ],
    whyItMatters:
      "ETF approval brings institutional crypto adoption mainstream and validates Coinbase's positioning as crypto infrastructure leader.",
    category: 'Markets',
    publishedAt: new Date('2024-01-15T05:00:00Z'),
    isRead: false,
    isSaved: false,
  },
  {
    id: '7',
    headline: 'Microsoft Announces AI-Powered Windows Copilot+ PCs',
    bullets: [
      'New Neural Processing Units deliver 45 TOPS of AI performance',
      'Local AI features include real-time translation and content generation',
      'Battery life extends to 22+ hours with AI optimization',
      'Partnership with Qualcomm, Intel, and AMD for chip diversity',
    ],
    whyItMatters:
      "Represents Microsoft's biggest Windows innovation since touch interfaces, potentially reshaping the PC market around AI capabilities.",
    category: 'Technology',
    publishedAt: new Date('2024-01-15T04:30:00Z'),
    isRead: false,
    isSaved: false,
  },
  {
    id: '8',
    headline: 'Stripe Acquires Bridge for $1.1B to Enter Stablecoin Market',
    bullets: [
      "Largest crypto acquisition in Stripe's history",
      'Bridge provides stablecoin infrastructure for global payments',
      "Integration planned for Stripe's international payment rails",
      'CEO Patrick Collison calls stablecoins "future of money movement"',
    ],
    whyItMatters:
      'Signals major fintech players are embracing crypto rails for faster, cheaper cross-border payments at scale.',
    category: 'Startups',
    publishedAt: new Date('2024-01-15T04:00:00Z'),
    isRead: false,
    isSaved: false,
  },
];

export const dailyDigestArticles = mockArticles.slice(0, 6);
