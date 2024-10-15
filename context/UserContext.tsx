import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  email: string;
  password: string;
}

interface UserContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  signup: (email: string, password: string) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  const signup = (email: string, password: string) => {
    const userExists = registeredUsers.some(user => user.email === email);
    if (userExists) return false; // Sign up fails if user already exists
    setRegisteredUsers([...registeredUsers, { email, password }]);
    return true;
  };

  const login = (email: string, password: string) => {
    const registeredUser = registeredUsers.find(user => user.email === email && user.password === password);
    if (registeredUser) {
      setUser(registeredUser);
      return true; // Login successful
    }
    return false; // Login failed
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
