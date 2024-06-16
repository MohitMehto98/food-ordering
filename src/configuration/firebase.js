// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "../config/config";

const firebaseConfig = {
	apiKey: config.VITE_API_KEY,
	authDomain: config.VITE_AUTH_DOMAIN,
	projectId: config.VITE_PROJECT_ID,
	storageBucket: config.VITE_STORAGE_BUCKET,
	messagingSenderId: config.VITE_MESSANGING_SENDER,
	appId: config.VITE_APP_ID,
	measurementId: config.VITE_MEASUREMENT_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
