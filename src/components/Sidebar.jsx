import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import {
  Dashboard, CalendarToday, AccountCircle, AdminPanelSettings, AddTask
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';

const Sidebar = () => {
  const { user } = useUser();
  const navigate = useNavigate();

  const items = [
    { label: 'Dashboard', icon: <Dashboard />, path: '/' },
    { label: 'Calendar', icon: <CalendarToday />, path: '/calendar' },
    { label: 'Profile', icon: <AccountCircle />, path: '/profile' },
  ];

  if (user.role === 'User') {
    items.push({ label: 'Create Task', icon: <AddTask />, path: '/create-task' });
  }

  if (user.role === 'Admin') {
    items.push({ label: 'Admin Panel', icon: <AdminPanelSettings />, path: '/admin' });
  }

  return (
    <Drawer variant="permanent" anchor="left" sx={{ width: 240 }}>
      <List sx={{ mt: 8 }}>
        {items.map((item) => (
          <ListItem button key={item.label} onClick={() => navigate(item.path)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;


