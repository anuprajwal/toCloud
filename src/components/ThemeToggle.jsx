import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // On mount, check localStorage or fallback to system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    const initialTheme = savedTheme === 'dark' || (savedTheme === null && prefersDark);
    setIsDark(initialTheme);
    document.documentElement.classList.toggle('dark', initialTheme);
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const newIsDark = !prev;

      // Update class and localStorage
      document.documentElement.classList.toggle('dark', newIsDark);
      localStorage.setItem('theme', newIsDark ? 'dark' : 'light');

      return newIsDark;
    });
  };

  return (
    <button
      onClick={toggleTheme}
      className="toggle"
      aria-label="Toggle Theme"
    >
      {isDark ? (
        <Moon className="h-5 w-5" />
      ) : (
        <Sun className="h-5 w-5 text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
