// Modified UserContext to include additional user details
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  birthday: string;
  gender: string;
  mobileNumber: string;
  profilePicture: string | null; // Add profile picture property
}

interface UserContextType {
  user: User | null;
  registeredUsers: User[];
  login: (email: string, password: string) => boolean;
  logout: () => void;
  signup: (details: Omit<User, 'user'>) => boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [registeredUsers, setRegisteredUsers] = useState<User[]>([]);

  const signup = (details: Omit<User, 'user'>) => {
    const userExists = registeredUsers.some(user => user.email === details.email);
    if (userExists) return false;
    setRegisteredUsers([...registeredUsers, details]);
    return true;
  };

  const login = (email: string, password: string) => {
    const registeredUser = registeredUsers.find(user => user.email === email && user.password === password);
    if (registeredUser) {
      setUser(registeredUser);
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, registeredUsers, login, logout, signup }}>
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
