import React, { useState } from 'react';
import {
  Box, Button, Container, Paper, TextField, Typography, LinearProgress
} from '@mui/material';
import Sidebar from '../components/Sidebar';
import { useUser } from '../context/UserContext';
import { useNavigate } from 'react-router-dom';
import { addTask } from '../data/taskStore';

const TaskForm = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const [task, setTask] = useState({
    title: '',
    description: '',
    deadline: '',
    progress: 0,
    photos: [],
    status: 'Pending',
    submittedBy: user.fullName,
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleProgressChange = (e) => {
    const value = Math.max(0, Math.min(100, Number(e.target.value)));
    setTask({ ...task, progress: value });
  };

  const handleFileChange = (e) => {
    const previews = Array.from(e.target.files).map(file => URL.createObjectURL(file));
    setTask({ ...task, photos: previews });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ ...task, id: Date.now() });
    alert('Task submitted for approval!');
    navigate('/');
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Container maxWidth="md" sx={{ mt: 8 }}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h5">Create New Task</Typography>
          <TextField fullWidth label="Title" name="title" value={task.title} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Description" name="description" value={task.description} onChange={handleChange} multiline rows={3} margin="normal" />
          <TextField fullWidth label="Deadline" name="deadline" type="date" InputLabelProps={{ shrink: true }} value={task.deadline} onChange={handleChange} margin="normal" />
          <TextField fullWidth label="Progress %" type="number" name="progress" value={task.progress} onChange={handleProgressChange} margin="normal" />
          <LinearProgress variant="determinate" value={task.progress} sx={{ my: 2, height: 10 }} />
          <Button variant="outlined" component="label" fullWidth>
            Upload Photos
            <input hidden multiple type="file" onChange={handleFileChange} />
          </Button>
          {task.photos.length > 0 && (
            <Box display="flex" mt={2} gap={2}>
              {task.photos.map((src, idx) => (
                <img key={idx} src={src} alt="preview" style={{ width: 100, height: 100, objectFit: 'cover' }} />
              ))}
            </Box>
          )}
          <Button variant="contained" sx={{ mt: 3 }} fullWidth onClick={handleSubmit}>
            Submit for Approval
          </Button>
        </Paper>
      </Container>
    </Box>
  );
};

export default TaskForm;

