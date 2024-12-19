import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#121212',
  },
  form: {
    backgroundColor: '#1e1e1e',
    padding: 15,
    borderRadius: 8,
    elevation: 3,
    width: '90%',
    maxWidth: 350,
    alignSelf: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#fff',
  },
  input: {
    height: 45,
    borderColor: '#444',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    color: '#fff',
    backgroundColor: '#333',
  },
  error: {
    color: '#f44336',
    marginBottom: 15,
    textAlign: 'center',
  },
  validEmail: {
    color: '#fff',
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
      backgroundColor: '#4CAF50',
      padding: 10,
      borderRadius: 5,
      alignItems: 'center',
      marginBottom: 10,
    },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  signUpLink: {
    marginTop: 20,
    alignItems: 'center',
  },
  signUpText: {
    color: '#4CAF50',
    fontSize: 14,
  },
  userCard: {
      backgroundColor: '#333',
      padding: 10,
      borderRadius: 8,
      marginBottom: 10,
  },
  userText: {
      color: '#fff',
      fontSize: 14,
  },
    profilePicture: {
      width: 100,
      height: 100,
      borderRadius: 50,
      marginBottom: 10,
      alignSelf: 'center',
    },

    imageButtonText: {
      color: '#fff',
      fontWeight: 'bold',
    },

    userProfileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginBottom: 5,
    },

});
