import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './routes/AppRoutes';
import { ThemeContextProvider } from './components/ThemeContext';

const App: React.FC = () => {
  return (
      <ThemeContextProvider>
        <AppRoutes />
      </ThemeContextProvider>
  );
};

export default App;