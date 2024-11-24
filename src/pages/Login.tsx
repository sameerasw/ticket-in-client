import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box, Alert, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import { login } from '../services/sessionApi';

interface LoginProps {
  onLoginSuccess: (token: string, name: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      const data = await login(email, password);
      onLoginSuccess(data.token, data.name);
      navigate('/'); // Navigate to the store page
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <Paper>
      <Navbar onSearch={() => { }} />
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        maxWidth: '400px',
        margin: 'auto',
      }}>
        <Typography component="h1" variant="h5">
          Login to Ticketin
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <Alert severity="error">{error}</Alert>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate('/register')}
          >
            Register
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Login;