import { DailyStats } from '../types/article';
import { Flame, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ProgressTrackerProps {
  stats: DailyStats;
  className?: string;
}

export function ProgressTracker({ stats, className }: ProgressTrackerProps) {
  const progress = (stats.readToday / stats.totalToday) * 100;
  const isComplete = stats.readToday >= stats.totalToday;

  const getStreakMessage = (streak: number) => {
    if (streak === 0) return 'Start your streak today! 🚀';
    if (streak === 1) return 'Great start! Keep it going 💪';
    if (streak < 7) return `Day ${streak} streak: you're building momentum! 🔥`;
    if (streak < 30) return `${streak} days strong: you're on fire! 🔥🔥`;
    return `${streak} day streak: you're a news ninja! 🥷`;
  };

  if (isComplete) {
    return (
      <div className={cn('bg-gradient-success rounded-xl p-6 text-center', className)}>
        <CheckCircle className="w-12 h-12 text-success-foreground mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-success-foreground mb-2">
          You're done for today! 🎉
        </h2>
        <p className="text-success-foreground/90 mb-4">{getStreakMessage(stats.currentStreak)}</p>
        <div className="bg-success-foreground/10 rounded-lg p-4">
          <p className="text-sm text-success-foreground">
            Come back tomorrow for your next daily digest
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn('bg-card border border-card-border rounded-xl p-6', className)}>
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-card-foreground">Daily Progress</h3>
          <p className="text-sm text-muted-foreground">
            {stats.readToday} / {stats.totalToday} articles read
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Flame className="w-5 h-5 text-primary" />
          <span className="text-lg font-bold text-primary">{stats.currentStreak}</span>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
          <div
            className="h-full bg-gradient-primary transition-all duration-500 ease-out rounded-full"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {/* Streak Message */}
      <div className="bg-accent rounded-lg p-4">
        <p className="text-sm text-muted-foreground text-center">
          {getStreakMessage(stats.currentStreak)}
        </p>
      </div>
    </div>
  );
}
