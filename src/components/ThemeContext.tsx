import React, { createContext, useContext, useState } from 'react';
import { ThemeProvider, createTheme, Theme } from '@mui/material/styles';

interface ThemeContextType {
  toggleTheme: () => void;
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
};

interface ThemeContextProviderProps {
  children: React.ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({ children }) => {
    const getSystemTheme = () => {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark';
        }
        return 'light';
    };

    const [mode, setMode] = useState<'dark' | 'light' | 'system'>(getSystemTheme());

    const toggleTheme = () => {
        setMode((prevMode) => {
            if (prevMode === 'light') return 'dark';
            if (prevMode === 'dark') return 'light';
            return getSystemTheme();
        });
    };

    const theme = createTheme({
        palette: {
            mode: mode === 'system' ? getSystemTheme() : mode,
        },
        shape: {
            borderRadius: 16, // Set your desired border radius here
        },
    });

    return (
        <ThemeContext.Provider value={{ toggleTheme, theme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};