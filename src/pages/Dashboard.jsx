import React from 'react';
import { Box, Typography, Grid, Paper, LinearProgress } from '@mui/material';
import Sidebar from '../components/Sidebar';
import { getTasks } from '../data/taskStore';
import { useUser } from '../context/UserContext';

const Dashboard = () => {
  const { user } = useUser();
  const allTasks = getTasks();

  const tasks = user.role === 'Admin'
    ? allTasks
    : allTasks.filter((task) => task.submittedBy === user.fullName);

  return (
    <Box display="flex">
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Dashboard
        </Typography>

        {tasks.length === 0 ? (
          <Typography>No tasks available.</Typography>
        ) : (
          <Grid container spacing={3}>
            {tasks.map((task, idx) => (
              <Grid item xs={12} md={6} key={idx}>
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h6">{task.title}</Typography>
                  <Typography>Status: {task.status}</Typography>
                  <LinearProgress
                    variant="determinate"
                    value={task.progress}
                    sx={{ my: 1 }}
                    color={
                      task.status === 'Approved'
                        ? 'success'
                        : task.status === 'Rejected'
                        ? 'error'
                        : 'warning'
                    }
                  />
                  <Typography variant="caption">
                    {task.progress}% Complete
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;



