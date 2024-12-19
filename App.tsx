import React from 'react';
import { UserProvider } from './src/context/UserContext';
import { Slot } from 'expo-router';

export default function App() {
  return (
    <UserProvider>
      <Slot /> {/* This will ensure all routes and components are within UserProvider */}
    </UserProvider>
  );
}
