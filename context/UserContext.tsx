import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the shape of the user object and the context functions
interface User {
  email: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string) => void;
  logout: () => void;
}

// Create the context with default values
const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const login = (email: string) => {
    setUser({ email }); // Set the user data upon login
  };

  const logout = () => {
    setUser(null); // Clear the user data upon logout
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext in any component
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
