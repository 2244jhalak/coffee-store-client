// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7ac94iga2CHy-e9UbLwplYnsTFC79am0",
  authDomain: "coffee-store-client-ed4cf.firebaseapp.com",
  projectId: "coffee-store-client-ed4cf",
  storageBucket: "coffee-store-client-ed4cf.appspot.com",
  messagingSenderId: "484814275905",
  appId: "1:484814275905:web:61e4b38e8dba21729b8dc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;