import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button, Typography, Container, Box, Alert } from '@mui/material';

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
            await axios.post('http://localhost:8081/customers', { name, email, password });
            onRegisterSuccess();
            navigate('/login'); // Navigate to the login page
        } catch (err) {
            setError('Registration failed');
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={{ mt: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Register
                </Typography>
                <form onSubmit={handleSubmit}>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="Name"
                            variant="outlined"
                            fullWidth
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="Email"
                            variant="outlined"
                            fullWidth
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </Box>
                    <Box sx={{ mb: 2 }}>
                        <TextField
                            label="Password"
                            variant="outlined"
                            fullWidth
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </Box>
                    {error && <Alert severity="error">{error}</Alert>}
                    <Box sx={{ mt: 2 }}>
                        <Button type="submit" variant="contained" color="primary" fullWidth>
                            Register
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
    );
};

export default Register;