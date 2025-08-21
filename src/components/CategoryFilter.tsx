import { Article } from '../types/article';
import { cn } from '@/lib/utils';

interface CategoryFilterProps {
  selectedCategory: Article['category'];
  onCategoryChange: (category: Article['category']) => void;
  className?: string;
}

const categories: Article['category'][] = [
  'All',
  'Technology',
  'Markets',
  'Startups',
  'Policy',
  'AI',
];

const categoryStyles = {
  All: 'bg-primary text-primary-foreground',
  Technology: 'bg-news-tech text-white',
  Markets: 'bg-news-market text-white',
  Startups: 'bg-news-startup text-white',
  Policy: 'bg-news-policy text-white',
  AI: 'bg-news-ai text-white',
};

export function CategoryFilter({
  selectedCategory,
  onCategoryChange,
  className,
}: CategoryFilterProps) {
  return (
    <div className={cn('flex gap-2 overflow-x-auto pb-2 scrollbar-hide', className)}>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={cn(
            'px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all duration-200 flex-shrink-0',
            selectedCategory === category
              ? categoryStyles[category]
              : 'bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground',
          )}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
