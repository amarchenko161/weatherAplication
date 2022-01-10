import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRxav-n5a-df3QLUvxbOqpe0-pRzewwAg",
  authDomain: "fir-react-auth-bd6c9.firebaseapp.com",
  projectId: "fir-react-auth-bd6c9",
  storageBucket: "fir-react-auth-bd6c9.appspot.com",
  messagingSenderId: "502720920073",
  appId: "1:502720920073:web:6ab12f5c7bd3149b8816d8",
  measurementId: "G-YKF5FYPXTT",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firebaseInstans = { auth, app };

export default firebaseInstans;

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
//   measurementId: process.env.REACT_APP_MEASUREMENT_ID,
// };
