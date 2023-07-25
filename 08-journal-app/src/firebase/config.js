// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();


// Your web app's Firebase configuration
//Dev/Prod
// const firebaseConfig = {
//   apiKey: "AIzaSyAwOv1lSpOAAYSQfnOmgda-aUAyTdJUdcs",
//   authDomain: "react-cursos-881ba.firebaseapp.com",
//   projectId: "react-cursos-881ba",
//   storageBucket: "react-cursos-881ba.appspot.com",
//   messagingSenderId: "945371631807",
//   appId: "1:945371631807:web:db40a33e11e51c6f0a760a"
// };

//Testing
// const firebaseConfig = {
//   apiKey: "AIzaSyBCOsILnxage8tjSqavzlJtkMGxw1AszMg",
//   authDomain: "react-firebase-testing-1da4d.firebaseapp.com",
//   projectId: "react-firebase-testing-1da4d",
//   storageBucket: "react-firebase-testing-1da4d.appspot.com",
//   messagingSenderId: "163253199247",
//   appId: "1:163253199247:web:3c6e33de5a51c93bf12bfa"
// };

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

//console.log(firebaseConfig);

export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);