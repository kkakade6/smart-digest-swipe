import { useState } from 'react';
import { Bookmark, BookmarkCheck, ArrowRight } from 'lucide-react';
import { Article } from '../types/article';
import { Button } from '@/components/ui/button';
import { useSwipeGesture } from '../hooks/useSwipeGesture';
import { cn } from '@/lib/utils';

interface NewsCardProps {
  article: Article;
  onSwipeRead: (id: string) => void;
  onToggleSave: (id: string) => void;
  className?: string;
}

const categoryColors = {
  All: 'bg-primary',
  Technology: 'bg-news-tech',
  Markets: 'bg-news-market',
  Startups: 'bg-news-startup',
  Policy: 'bg-news-policy',
  AI: 'bg-news-ai',
};

export function NewsCard({ article, onSwipeRead, onToggleSave, className }: NewsCardProps) {
  const { isDragging, dragOffset, handlers } = useSwipeGesture({
    onSwipeRight: () => onSwipeRead(article.id),
    threshold: 120,
  });

  const formatTime = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    }).format(date);
  };

  return (
    <div className={cn('relative select-none news-card-enter', className)}>
      {/* Swipe background indicator */}
      <div
        className="absolute inset-0 bg-success rounded-xl opacity-0 flex items-center justify-end px-6 transition-opacity duration-200"
        style={{ opacity: Math.min(Math.max(dragOffset, 0) / 120, 1) }}
      >
        <ArrowRight className="w-6 h-6 text-success-foreground" />
      </div>

      {/* Main card */}
      <div
        className={cn(
          'bg-card border border-card-border rounded-xl shadow-card hover:shadow-card-hover news-card-swipe cursor-grab active:cursor-grabbing',
          isDragging && 'shadow-card-hover',
        )}
        style={{ transform: `translateX(${Math.max(dragOffset, 0)}px)` }}
        {...handlers}
      >
        {/* Card Header */}
        <div className="p-6 pb-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <span
                className={cn(
                  'px-3 py-1 rounded-full text-xs font-medium text-white category-chip',
                  categoryColors[article.category],
                )}
              >
                {article.category}
              </span>
              <span className="text-sm text-muted-foreground">
                {formatTime(article.publishedAt)}
              </span>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={(e) => {
                e.stopPropagation();
                onToggleSave(article.id);
              }}
              className="hover:bg-accent"
            >
              {article.isSaved ? (
                <BookmarkCheck className="w-4 h-4 text-primary" />
              ) : (
                <Bookmark className="w-4 h-4" />
              )}
            </Button>
          </div>

          <h2 className="text-xl font-bold text-card-foreground mb-4 leading-tight">
            {article.headline}
          </h2>
        </div>

        {/* Bullet Points */}
        <div className="px-6 pb-4">
          <ul className="space-y-2">
            {article.bullets.map((bullet, index) => (
              <li key={index} className="flex items-start space-x-2">
                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Why It Matters */}
        <div className="px-6 pb-6">
          <div className="bg-accent rounded-lg p-4">
            <h3 className="text-sm font-semibold text-primary mb-2">Why it matters</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{article.whyItMatters}</p>
          </div>
        </div>

        {/* Swipe indicator */}
        <div className="px-6 pb-4">
          <div className="flex items-center justify-center text-muted-foreground opacity-60">
            <ArrowRight className="w-4 h-4 mr-2" />
            <span className="text-xs">Swipe right to mark as read</span>
          </div>
        </div>
      </div>
    </div>
  );
}
