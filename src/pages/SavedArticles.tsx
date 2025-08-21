import { useState, useMemo } from 'react';
import { Bookmark, Calendar, ExternalLink, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { mockArticles } from '../data/mockArticles';
import { Article } from '../types/article';

export default function SavedArticles() {
  const [articles, setArticles] = useState<Article[]>(mockArticles);

  // Get only saved articles
  const savedArticles = useMemo(() => articles.filter((article) => article.isSaved), [articles]);

  const handleUnsave = (id: string) => {
    setArticles((prev) =>
      prev.map((article) => (article.id === id ? { ...article, isSaved: false } : article)),
    );
  };

  const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    }).format(date);
  };

  const getCategoryColor = (category: Article['category']) => {
    const colors = {
      All: 'bg-primary',
      Technology: 'bg-news-tech',
      Markets: 'bg-news-market',
      Startups: 'bg-news-startup',
      Policy: 'bg-news-policy',
      AI: 'bg-news-ai',
    };
    return colors[category];
  };

  if (savedArticles.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        <div className="max-w-2xl mx-auto px-4 py-6">
          {/* Header */}
          <div className="mb-8">
            <div className="flex items-center space-x-2 mb-2">
              <Bookmark className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-primary">Saved Articles</span>
            </div>
            <h1 className="text-3xl font-bold text-foreground">Your Reading List</h1>
          </div>

          {/* Empty State */}
          <div className="bg-card border border-card-border rounded-xl p-12 text-center">
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Bookmark className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold text-card-foreground mb-2">
              No saved articles yet
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
              Tap the bookmark icon on any article to save it for later reading.
            </p>
            <Button onClick={() => window.history.back()} variant="outline">
              Browse Articles
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center space-x-2 mb-2">
            <Bookmark className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Saved Articles</span>
          </div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Your Reading List</h1>
          <p className="text-muted-foreground">
            {savedArticles.length} saved {savedArticles.length === 1 ? 'article' : 'articles'}
          </p>
        </div>

        {/* Articles List */}
        <div className="space-y-4">
          {savedArticles.map((article) => (
            <div
              key={article.id}
              className="bg-card border border-card-border rounded-xl p-6 hover:shadow-card-hover transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium text-white ${getCategoryColor(article.category)}`}
                  >
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Calendar className="w-3 h-3" />
                    <span className="text-xs">{formatDate(article.publishedAt)}</span>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleUnsave(article.id)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>

              <h3 className="text-lg font-bold text-card-foreground mb-3 leading-tight">
                {article.headline}
              </h3>

              {/* First bullet point as preview */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {article.bullets[0]}
              </p>

              {/* Why it matters preview */}
              <div className="bg-accent/50 rounded-lg p-3 mb-4">
                <h4 className="text-xs font-semibold text-primary mb-1 uppercase tracking-wide">
                  Why it matters
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                  {article.whyItMatters}
                </p>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                  <span>{article.bullets.length} key points</span>
                  <span>•</span>
                  <span>{article.isRead ? 'Read' : 'Unread'}</span>
                </div>
                <Button variant="ghost" size="sm" className="text-primary hover:text-primary">
                  <span className="text-sm">Read Full</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Clear All Button */}
        {savedArticles.length > 3 && (
          <div className="mt-8 text-center">
            <Button
              variant="outline"
              onClick={() => {
                setArticles((prev) => prev.map((article) => ({ ...article, isSaved: false })));
              }}
              className="text-muted-foreground"
            >
              Clear All Saved Articles
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
