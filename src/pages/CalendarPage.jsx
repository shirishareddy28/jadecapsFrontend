import React from 'react';
import { Box, Typography } from '@mui/material';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import Sidebar from '../components/Sidebar';
import { getTasks } from '../data/taskStore';
import { useUser } from '../context/UserContext';

const CalendarPage = () => {
  const { user } = useUser();
  const allTasks = getTasks();

  const filteredTasks = user.role === 'Admin'
    ? allTasks
    : allTasks.filter((task) => task.submittedBy === user.fullName);

  const events = filteredTasks.map((task) => ({
    id: task.id,
    title: task.title,
    date: task.deadline,
    color:
      task.status === 'Approved'
        ? 'green'
        : task.status === 'Rejected'
        ? 'red'
        : 'orange',
  }));

  return (
    <Box display="flex">
      <Sidebar />
      <Box sx={{ p: 3, flexGrow: 1 }}>
        <Typography variant="h4" gutterBottom>
          Task Calendar
        </Typography>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          height="auto"
          events={events}
        />
      </Box>
    </Box>
  );
};

export default CalendarPage;

