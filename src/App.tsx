import CssBaseline from '@mui/material/CssBaseline';
import AppRoutes from './routes/AppRoutes';
import { ThemeContextProvider } from './components/ThemeContext';

const App: React.FC = () => {
  return (
    <>
      <ThemeContextProvider>
        <CssBaseline />
          <AppRoutes />
      </ThemeContextProvider>
    </>
  );
};

export default App;