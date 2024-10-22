import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';  // Importing UserContext
import styles from '../../assets/styles/style';

const HomeScreen = () => {
  const router = useRouter();
  const { user, logout } = useUser();  // Accessing user context

  const handleLogout = () => {
    logout();  // Using context to log out
    Alert.alert('Logged out');
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Welcome, {user?.email || 'Guest'}!</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
