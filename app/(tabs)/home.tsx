import React from 'react';
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../../assets/styles/style';

const HomeScreen = () => {
  const router = useRouter();

  const handleLogout = () => {
    Alert.alert('Logged out');
    router.replace('/');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Welcome to the Home Screen!</Text>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
