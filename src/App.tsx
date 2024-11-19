import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
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