import React, { useState } from 'react';
import {
  Avatar, Box, Button, Container, TextField, Typography, Paper
} from '@mui/material';
import Sidebar from '../components/Sidebar';
import { useUser } from '../context/UserContext';

const Profile = () => {
  const { user, updateUser } = useUser();

  const [form, setForm] = useState({
    fullName: user.fullName,
    mobile: user.mobile,
    photo: user.photo,
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, photo: URL.createObjectURL(file) });
    }
  };

  const handleSubmit = () => {
    updateUser(form);
    alert('Profile updated successfully!');
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Container maxWidth="sm" sx={{ mt: 8 }}>
        <Paper elevation={3} sx={{ p: 4 }}>
          <Typography variant="h5" gutterBottom>
            My Profile
          </Typography>

          <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
            <Avatar src={form.photo} sx={{ width: 100, height: 100, mb: 2 }} />
            <Button variant="contained" component="label">
              Upload Photo
              <input hidden accept="image/*" type="file" onChange={handlePhotoChange} />
            </Button>
          </Box>

          <TextField fullWidth label="Full Name" name="fullName" value={form.fullName} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Mobile Number" name="mobile" value={form.mobile} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Role" value={user.role} disabled margin="normal" />

          <Button fullWidth variant="contained" onClick={handleSubmit} sx={{ mt: 2 }}>
            Save Changes
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default Profile;


  