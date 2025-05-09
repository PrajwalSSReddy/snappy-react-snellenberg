
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';
import { Switch } from "@/components/ui/switch";

// Create a context for theme
export const ThemeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

// Custom hook to use theme
export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  // Check local storage for saved preference or use system preference
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  };
  
  const [isDarkMode, setIsDarkMode] = useState(getInitialTheme);

  // Apply theme changes to document
  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      <div className="transition-colors duration-300">
        {children}
        <div className="fixed bottom-8 right-8 z-50 flex items-center gap-2 p-2 rounded-full bg-gray-100 dark:bg-gray-800 shadow-lg">
          <Sun size={18} className="text-gray-600 dark:text-gray-300" />
          <Switch 
            checked={isDarkMode}
            onCheckedChange={toggleDarkMode}
            className="data-[state=checked]:bg-blue-500"
          />
          <Moon size={18} className="text-gray-600 dark:text-gray-300" />
        </div>
      </div>
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
