import React from 'react';
import { UserProvider } from './src/context/UserContext'; // Adjust this path to the correct one
import { Slot } from 'expo-router'; // Ensure you are using Expo Router correctly

export default function App() {
  return (
    <UserProvider>
      <Slot /> {/* This will ensure all routes and components are within UserProvider */}
    </UserProvider>
  );
}
