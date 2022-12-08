import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.FirebaseApiKey,
  authDomain: process.env.FirebaseAuthDomain,
  projectId: process.env.FirebaseProjectID,
  storageBucket: process.env.FirebaseStorageBucket,
  messagingSenderId: process.env.FirebaseMessagingSenderId,
  appId: process.env.FirebaseAppId,
};

const app = initializeApp(firebaseConfig);
