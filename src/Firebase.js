import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDBAvC9j_R3AF7QarW_Ae79MAf7jYTgWAY",
  authDomain: "practice-firebase-tnt.firebaseapp.com",
  databaseURL: "https://practice-firebase-tnt-default-rtdb.firebaseio.com",
  projectId: "practice-firebase-tnt",
  storageBucket: "practice-firebase-tnt.appspot.com",
  messagingSenderId: "513480147556",
  appId: "1:513480147556:web:606c6544f7ec2b8a089571",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export const database = firebaseApp.database();