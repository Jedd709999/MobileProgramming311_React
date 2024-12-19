// Modified HomeScreen to include a "View Registered Users" button
import React from 'react';
import { SafeAreaView, Text, TouchableOpacity, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';
import styles from '../../assets/styles/style';

const HomeScreen = () => {
  const router = useRouter();
  const { user, logout } = useUser();

  const handleLogout = () => {
    logout();
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

        <TouchableOpacity style={styles.button} onPress={() => router.push('/registeredUsers')}>
          <Text style={styles.buttonText}>View Registered Users</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;