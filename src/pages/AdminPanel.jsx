import React, { useState } from 'react';
import { Box, Button, Typography, Paper, Grid, TextField } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { getTasks, updateTaskStatus, deleteTask } from '../data/taskStore';

const AdminPanel = () => {
  const [tasks, setTasks] = useState(getTasks());
  const [comments, setComments] = useState({});

  const handleStatus = (id, status) => {
    updateTaskStatus(id, status, comments[id] || '');
    setTasks(getTasks());
  };

  const handleDelete = (id) => {
    deleteTask(id);
    setTasks(getTasks());
  };

  return (
    <Box display="flex">
      <Sidebar />
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h4">Admin Panel</Typography>
        {tasks.length === 0 ? (
          <Typography>No tasks submitted.</Typography>
        ) : (
          <Grid container spacing={3}>
            {tasks.map((task) => (
              <Grid item xs={12} key={task.id}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">{task.title}</Typography>
                  <Typography>By: {task.submittedBy}</Typography>
                  <Typography>Status: {task.status}</Typography>
                  <Box mt={1} display="flex" gap={1} flexWrap="wrap">
                    {task.photos.map((src, idx) => (
                      <img key={idx} src={src} alt="task" style={{ width: 80, height: 80, objectFit: 'cover' }} />
                    ))}
                  </Box>
                  <TextField
                    fullWidth
                    label="Comment"
                    value={comments[task.id] || ''}
                    onChange={(e) => setComments({ ...comments, [task.id]: e.target.value })}
                    sx={{ mt: 2 }}
                  />
                  <Box mt={2} display="flex" gap={2}>
                    <Button variant="contained" color="success" onClick={() => handleStatus(task.id, 'Approved')}>Approve</Button>
                    <Button variant="contained" color="error" onClick={() => handleStatus(task.id, 'Rejected')}>Reject</Button>
                    <Button variant="outlined" onClick={() => handleDelete(task.id)}>Delete</Button>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default AdminPanel;


