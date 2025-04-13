import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box, Container, Paper, TextField, Button, Typography, MenuItem
} from '@mui/material';
import { useUser } from '../context/UserContext';

const Login = () => {
  const { login } = useUser();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    fullName: '',
    mobile: '',
    role: 'User', // default role
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    login({ ...form, photo: null });
    navigate('/');
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Paper sx={{ p: 4 }}>
        <Typography variant="h5" gutterBottom>
          Login
        </Typography>

        <TextField fullWidth label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} margin="normal" />
        <TextField fullWidth label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} margin="normal" />
        <TextField
          select fullWidth label="Role"
          name="role" value={form.role} onChange={handleChange}
          margin="normal"
        >
          <MenuItem value="User">User</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </TextField>

        <Button variant="contained" fullWidth sx={{ mt: 2 }} onClick={handleLogin}>
          Log In
        </Button>
      </Paper>
    </Container>
  );
};

export default Login;
