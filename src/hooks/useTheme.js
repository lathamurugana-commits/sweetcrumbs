import { useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for dark/light mode toggle with localStorage persistence
 */
export default function useTheme() {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('sweetcrumbs-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    localStorage.setItem('sweetcrumbs-theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = useCallback(() => setIsDark(prev => !prev), []);

  return { isDark, toggleTheme };
}
