import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { dailyDigestArticles } from '../data/mockArticles';

export default function DailyDigest() {
  const navigate = useNavigate();
  const [readArticles, setReadArticles] = useState<Set<string>>(new Set());

  const handleMarkAsRead = (id: string) => {
    setReadArticles((prev) => new Set([...prev, id]));
  };

  const formatDate = () => {
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(new Date());
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Daily Digest</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Top Stories Today</h1>
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>5 min read</span>
            </div>
            <span>•</span>
            <span>{formatDate()}</span>
          </div>
        </div>

        {/* Articles */}
        <div className="space-y-6 mb-8">
          {dailyDigestArticles.map((article, index) => (
            <div
              key={article.id}
              className="bg-card border border-card-border rounded-xl p-6 hover:shadow-card-hover transition-shadow"
            >
              {/* Article Number */}
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 mt-1">
                  {index + 1}
                </div>

                <div className="flex-1 min-w-0">
                  {/* Category and Time */}
                  <div className="flex items-center space-x-3 mb-3">
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-accent text-accent-foreground">
                      {article.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {new Intl.DateTimeFormat('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                      }).format(article.publishedAt)}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-lg font-bold text-card-foreground mb-3 leading-tight">
                    {article.headline}
                  </h2>

                  {/* Key Points (first 2-3 bullets) */}
                  <ul className="space-y-2 mb-4">
                    {article.bullets.slice(0, 3).map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {bullet}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Why It Matters */}
                  <div className="bg-accent/50 rounded-lg p-3 mb-4">
                    <h3 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                      Why it matters
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {article.whyItMatters}
                    </p>
                  </div>

                  {/* Mark as Read Button */}
                  <Button
                    variant={readArticles.has(article.id) ? 'secondary' : 'outline'}
                    size="sm"
                    onClick={() => handleMarkAsRead(article.id)}
                    disabled={readArticles.has(article.id)}
                    className="w-full"
                  >
                    {readArticles.has(article.id) ? '✓ Read' : 'Mark as Read'}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="bg-gradient-primary rounded-xl p-6 text-center mb-6">
          <h3 className="text-lg font-bold text-primary-foreground mb-2">
            That's your daily digest!
          </h3>
          <p className="text-primary-foreground/90 mb-4">
            You've covered the {dailyDigestArticles.length} biggest stories from the last 24 hours.
          </p>
          <div className="text-sm text-primary-foreground/80">
            Reading time: ~5 minutes • {readArticles.size}/{dailyDigestArticles.length} read
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <Button
            onClick={() => navigate('/')}
            className="w-full bg-card hover:bg-card-hover text-card-foreground border border-card-border"
            variant="outline"
          >
            <span>Go to Full Feed</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            Want more? Check out the full feed for detailed coverage and additional stories.
          </p>
        </div>
      </div>
    </div>
  );
}
