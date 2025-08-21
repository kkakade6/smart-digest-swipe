export interface Article {
  id: string;
  headline: string;
  bullets: string[];
  whyItMatters: string;
  category: 'All' | 'Technology' | 'Markets' | 'Startups' | 'Policy' | 'AI';
  publishedAt: Date;
  isRead: boolean;
  isSaved: boolean;
}

export interface DailyStats {
  readToday: number;
  totalToday: number;
  currentStreak: number;
}
