import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import AuthLayout from './layouts/AuthLayout';
import Signup from './pages/auth/Signup';
import ThemeToggle from './components/ThemeToggle';
import './App.css'

function App() {

  return (
    <div className='App'>
      <ThemeToggle />
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
      </Routes> 
    </div>
  )
}

export default App
