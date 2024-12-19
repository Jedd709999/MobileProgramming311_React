import React, { useState } from 'react';
import { SafeAreaView, TextInput, TouchableOpacity, Text, View, Alert, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';
import * as ImagePicker from 'expo-image-picker';
import styles from '../../assets/styles/style';

const SignUpScreen = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [profilePicture, setProfilePicture] = useState(null); // State for the profile picture
  const [error, setError] = useState('');
  const router = useRouter();
  const { signup } = useUser();

  const handlePickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfilePicture(result.assets[0].uri);
    }
  };

  const handleSignUp = () => {
    if (!firstName || !lastName || !email || !password || !confirmPassword || !birthday || !gender || !mobileNumber) {
      setError('Please fill in all fields');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const success = signup({
      firstName,
      lastName,
      email,
      password,
      birthday,
      gender,
      mobileNumber,
      profilePicture
    });

    if (success) {
      Alert.alert('Sign Up Successful', `Signed up as ${email}`);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');
      setBirthday('');
      setGender('');
      setMobileNumber('');
      setProfilePicture(null);
      setError('');
      router.replace('/');
    } else {
      setError('User already exists');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.heading}>Sign Up</Text>
        {error ? <Text style={styles.error}>{error}</Text> : null}

        {profilePicture && (
          <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
        )}

        <TouchableOpacity style={styles.button} onPress={handlePickImage}>
          <Text style={styles.imageButtonText}>
            {profilePicture ? 'Change Profile Picture' : 'Upload Profile Picture'}
          </Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Last Name"
          value={lastName}
          onChangeText={setLastName}
          placeholderTextColor="#888"
        />

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

        <TextInput
          style={styles.input}
          placeholder="Birthday (YYYY-MM-DD)"
          value={birthday}
          onChangeText={setBirthday}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Gender"
          value={gender}
          onChangeText={setGender}
          placeholderTextColor="#888"
        />

        <TextInput
          style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          value={mobileNumber}
          onChangeText={setMobileNumber}
          placeholderTextColor="#888"
        />

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.link}
          onPress={() => router.replace('/')}
        >
          <Text style={styles.signUpText}>Already have an account? Log in</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUpScreen;
