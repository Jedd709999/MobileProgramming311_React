import React, { useState, useEffect, useMemo } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';  // Importing UserContext
import styles from '../../assets/styles/style';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();
  const { login } = useUser();  // Using context to handle login

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = () => {
    if (email === '' || password === '') {
      setError('Please fill in all fields');
      return;
    }

    if (!validateEmail(email)) {
      setError('Invalid email format');
      return;
    }

    if (password.length < 6) {
      setError('Password should be at least 6 characters');
      return;
    }

    setError('');
    login(email);  // Log user in using context
    Alert.alert('Login Successful', `Logged in as ${email}`);
    router.push('/home');
  };

  // useEffect for tracking errors
  useEffect(() => {
    if (error) {
      console.log('Error:', error);
    }
  }, [error]);

  // useMemo to optimize email validation
  const isEmailValid = useMemo(() => validateEmail(email), [email]);

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
          onChangeText={setEmail}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
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
