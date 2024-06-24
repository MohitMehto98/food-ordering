// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import config from "../config/config";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: config.apiKey,
	authDomain: config.authDomain,
	projectId: config.projectId,
	storageBucket: config.storageBucket,
	messagingSenderId: config.messagingSenderId,
	appId: config.appId,
	measurementId: config.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
