import { useState, useCallback } from 'react';

interface SwipeGestureOptions {
  onSwipeRight?: () => void;
  onSwipeLeft?: () => void;
  threshold?: number;
}

export function useSwipeGesture({
  onSwipeRight,
  onSwipeLeft,
  threshold = 100,
}: SwipeGestureOptions) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);

  const handleStart = useCallback((clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
    setDragOffset(0);
  }, []);

  const handleMove = useCallback(
    (clientX: number) => {
      if (!isDragging) return;

      setCurrentX(clientX);
      const offset = clientX - startX;
      setDragOffset(offset);

      // Auto-trigger swipe if threshold is exceeded
      if (offset > threshold && onSwipeRight) {
        setIsDragging(false);
        setDragOffset(0);
        onSwipeRight();
      } else if (offset < -threshold && onSwipeLeft) {
        setIsDragging(false);
        setDragOffset(0);
        onSwipeLeft();
      }
    },
    [isDragging, startX, threshold, onSwipeRight, onSwipeLeft],
  );

  const handleEnd = useCallback(() => {
    setIsDragging(false);

    // Snap back if not swiped far enough
    if (Math.abs(dragOffset) < threshold) {
      setDragOffset(0);
    }
  }, [dragOffset, threshold]);

  const handlers = {
    onMouseDown: (e: React.MouseEvent) => {
      handleStart(e.clientX);
      e.preventDefault();
    },
    onMouseMove: (e: React.MouseEvent) => {
      handleMove(e.clientX);
    },
    onMouseUp: handleEnd,
    onMouseLeave: handleEnd,
    onTouchStart: (e: React.TouchEvent) => {
      handleStart(e.touches[0].clientX);
    },
    onTouchMove: (e: React.TouchEvent) => {
      handleMove(e.touches[0].clientX);
    },
    onTouchEnd: handleEnd,
  };

  return {
    isDragging,
    dragOffset,
    handlers,
  };
}
