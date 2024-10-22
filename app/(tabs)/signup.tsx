import React, { useState, useEffect } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import styles from '../../assets/styles/style';

const SignUpScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSignUp = () => {
    if (email === '' || password === '' || confirmPassword === '') {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    Alert.alert('Sign Up Successful', `Signed up as ${email}`);
    router.replace('/');
  };

  // useEffect to handle side effects like errors
  useEffect(() => {
    if (error) {
      console.log('Sign up error:', error);
    }
  }, [error]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Sign Up</Text>
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

        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          secureTextEntry
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.replace('/')} style={styles.signUpLink}>
          <Text style={styles.signUpText}>Already have an account? Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
