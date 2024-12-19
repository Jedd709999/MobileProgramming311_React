// New RegisteredUsersScreen to display registered users
import React from 'react';
import { SafeAreaView, Text, ScrollView, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { useUser } from '../../context/UserContext';
import styles from '../../assets/styles/style';
import { Image } from 'react-native';

const RegisteredUsersScreen = () => {
  const { registeredUsers } = useUser();
  const router = useRouter();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ width: '100%' }}>
        <View style={styles.form}>
          <Text style={styles.heading}>Registered Users</Text>

          {registeredUsers.length > 0 ? (
            registeredUsers.map((user, index) => (
              <View key={index} style={styles.userCard}>
              {user.profilePicture && (
                    <Image source={{ uri: user.profilePicture }} style={styles.userProfileImage} />
                  )}
                <Text style={styles.userText}>First Name: {user.firstName}</Text>
                <Text style={styles.userText}>Last Name: {user.lastName}</Text>
                <Text style={styles.userText}>Email: {user.email}</Text>
                <Text style={styles.userText}>Birthday: {user.birthday}</Text>
                <Text style={styles.userText}>Gender: {user.gender}</Text>
                <Text style={styles.userText}>Mobile No.: {user.mobileNumber}</Text>
              </View>
            ))
          ) : (
            <Text style={styles.error}>No registered users found</Text>
          )}

          <TouchableOpacity style={styles.button} onPress={() => router.replace('/home')}>
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegisteredUsersScreen;