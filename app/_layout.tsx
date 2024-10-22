import React from 'react';
import { UserProvider } from '../context/UserContext'; // Adjust the path as needed
import { Slot } from 'expo-router';

const RootLayout = () => {
  return (
    <UserProvider>
      <Slot /> {/* This renders the actual route components */}
    </UserProvider>
  );
};

export default RootLayout;
