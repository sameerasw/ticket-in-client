import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Typography, Box, Alert, Paper } from '@mui/material';
import Navbar from '../components/Navbar';
import { register } from '../services/sessionApi';

interface RegisterProps {
  onRegisterSuccess: () => void;
}

const Register: React.FC<RegisterProps> = ({ onRegisterSuccess }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await register(name, email, password);
      onRegisterSuccess();
      navigate('/login'); // Navigate to the login page
    } catch (err) {
      setError('Registration failed');
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
          Register for Ticketin
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="name"
            label="Name"
            name="name"
            autoComplete="name"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
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
            Register
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate('/login')}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};

export default Register;