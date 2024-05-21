import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDI3UmYZzEJqiGEyaA_40InQfiIUhCCNFc",
	authDomain: "fir-fdacf.firebaseapp.com",
	projectId: "fir-fdacf",
	storageBucket: "fir-fdacf.appspot.com",
	messagingSenderId: "724479393430",
	appId: "1:724479393430:web:c0cfe6461c0f764177ccb7",
	measurementId: "G-9GMHLXJ4MH",
};

const firebaseApp = initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

const auth = getAuth();

export { auth };
