import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import CalendarPage from './pages/CalendarPage';
import AdminPanel from './pages/AdminPanel';
import TaskForm from './pages/TaskForm';
import Login from './pages/Login';
import { useUser } from './context/UserContext';

const App = () => {
  const { user } = useUser();

  if (!user) return <Login />;

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/calendar" element={<CalendarPage />} />
      <Route path="/admin" element={<AdminPanel />} />
      <Route path="/create-task" element={<TaskForm />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;



