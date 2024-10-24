import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBAKt6q8gIaMFcWojCwOQT7K6dAqLTehQ4",
  authDomain: "exporouterlogin.firebaseapp.com",
  projectId: "exporouterlogin",
  storageBucket: "exporouterlogin.appspot.com",
  messagingSenderId: "802243331687",
  appId: "1:802243331687:web:af018e58e210dc17a876c2",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Export the authentication instance

export default app;
