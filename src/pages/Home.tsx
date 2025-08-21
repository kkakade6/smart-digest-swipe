import { useState, useEffect } from 'react';
import { NewsCard } from '../components/NewsCard';
import { ProgressTracker } from '../components/ProgressTracker';
import { CategoryFilter } from '../components/CategoryFilter';
import { mockArticles } from '../data/mockArticles';
import { Article, DailyStats } from '../types/article';

export default function Home() {
  const [articles, setArticles] = useState<Article[]>(mockArticles);
  const [selectedCategory, setSelectedCategory] = useState<Article['category']>('All');
  const [stats, setStats] = useState<DailyStats>({
    readToday: 0,
    totalToday: 8,
    currentStreak: 2,
  });

  // Filter articles based on selected category
  const filteredArticles = articles.filter(
    (article) => selectedCategory === 'All' || article.category === selectedCategory,
  );

  // Get next unread article
  const nextArticle = filteredArticles.find((article) => !article.isRead);

  const handleSwipeRead = (id: string) => {
    setArticles((prev) =>
      prev.map((article) => (article.id === id ? { ...article, isRead: true } : article)),
    );
    setStats((prev) => ({ ...prev, readToday: prev.readToday + 1 }));
  };

  const handleToggleSave = (id: string) => {
    setArticles((prev) =>
      prev.map((article) =>
        article.id === id ? { ...article, isSaved: !article.isSaved } : article,
      ),
    );
  };

  // Update streak when user completes daily reading
  useEffect(() => {
    if (stats.readToday >= stats.totalToday && stats.readToday > 0) {
      setStats((prev) => ({ ...prev, currentStreak: prev.currentStreak + 1 }));
    }
  }, [stats.readToday, stats.totalToday]);

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-2xl mx-auto px-4 py-6 space-y-6">
        {/* Progress Tracker */}
        <ProgressTracker stats={stats} />

        {/* Category Filter */}
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-foreground">Today's News</h2>
          <CategoryFilter
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
        </div>

        {/* News Feed */}
        <div className="space-y-6">
          {nextArticle ? (
            <div key={nextArticle.id}>
              <NewsCard
                article={nextArticle}
                onSwipeRead={handleSwipeRead}
                onToggleSave={handleToggleSave}
              />

              {/* Articles remaining indicator */}
              <div className="mt-4 text-center">
                <p className="text-sm text-muted-foreground">
                  {filteredArticles.filter((a) => !a.isRead).length - 1} more articles in{' '}
                  {selectedCategory === 'All' ? 'feed' : selectedCategory}
                </p>
              </div>
            </div>
          ) : (
            <div className="bg-card border border-card-border rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📰</span>
              </div>
              <h3 className="text-lg font-semibold text-card-foreground mb-2">All caught up!</h3>
              <p className="text-muted-foreground mb-4">
                You've read all articles in the {selectedCategory} category.
              </p>
              {selectedCategory !== 'All' && (
                <button
                  onClick={() => setSelectedCategory('All')}
                  className="text-primary font-medium hover:underline"
                >
                  View all categories →
                </button>
              )}
            </div>
          )}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-card border border-card-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{stats.readToday}</div>
            <div className="text-xs text-muted-foreground">Read Today</div>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-success">{stats.currentStreak}</div>
            <div className="text-xs text-muted-foreground">Day Streak</div>
          </div>
          <div className="bg-card border border-card-border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-muted-foreground">
              {Math.round((stats.readToday / stats.totalToday) * 100)}%
            </div>
            <div className="text-xs text-muted-foreground">Complete</div>
          </div>
        </div>
      </div>
    </div>
  );
}
