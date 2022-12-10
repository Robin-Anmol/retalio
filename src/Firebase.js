import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// const firebaseConfig = {
//   apiKey: process.env.FirebaseApiKey,
//   authDomain: process.env.FirebaseAuthDomain,
//   projectId: process.env.FirebaseProjectID,
//   storageBucket: process.env.FirebaseStorageBucket,
//   messagingSenderId: process.env.FirebaseMessagingSenderId,
//   appId: process.env.FirebaseAppId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyC95WfUkUivbq7RK0g4r7sfRV_Of4UXonI",
  authDomain: "airbnb-pantnagar.firebaseapp.com",
  projectId: "airbnb-pantnagar",
  storageBucket: "airbnb-pantnagar.appspot.com",
  messagingSenderId: "737768451360",
  appId: "1:737768451360:web:a8a71bf6e1ee11c016fb45",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
