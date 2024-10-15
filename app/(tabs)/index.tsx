import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';
import styles from '../../assets/styles/style';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useUser();  // Access login function

  // Clear error when user starts typing in email or password fields
  const handleEmailChange = (value: string) => {
    setEmail(value);
    if (error) setError(''); // Clear error on change
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (error) setError(''); // Clear error on change
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    const success = login(email, password);  // Try logging in
    if (success) {
      setError(''); // Clear the error on successful login
      Alert.alert('Login Successful', `Logged in as ${email}`);
      router.push('/home');  // Navigate to home screen
    } else {
      setError('Invalid email or password');
    }
  };

  useEffect(() => {
    if (error) {
      console.log('Error:', error);
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Login</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={handleEmailChange}  // Clear error on input change
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={handlePasswordChange}  // Clear error on input change
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/signup')} style={styles.signUpLink}>
          <Text style={styles.signUpText}>Don't have an account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
