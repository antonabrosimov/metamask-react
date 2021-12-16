import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyA6Qsp2TvQNXRO9MDamtRVGQJmh7uZjXRA",
  authDomain: "admin-website-910ff.firebaseapp.com",
  databaseURL: "https://admin-website-910ff-default-rtdb.firebaseio.com/",
  projectId: "admin-website-910ff",
  storageBucket: "admin-website-910ff.appspot.com",
  messagingSenderId: "414848057515",
  appId: "1:414848057515:web:9c1a1ac40996da4e8bf7ee",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { app, db };
