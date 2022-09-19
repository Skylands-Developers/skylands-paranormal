// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// Other SDKs for Firebase products
// https://firebase.google.com/docs/web/setup#available-libraries

export const FIREBASE_CONFIG = {
	apiKey: "AIzaSyC5bozGNzfsCJxBNWQFhtXW2CvQxP28KZw",
	authDomain: "skylands-paranormal.firebaseapp.com",
	projectId: "skylands-paranormal",
	storageBucket: "skylands-paranormal.appspot.com",
	messagingSenderId: "828162038417",
	appId: "1:828162038417:web:178f0a76e567b2ad89fd30",
	measurementId: "G-679ZZLZBDW",
};

// Initialize Firebase
export function initFirebase() {
	const FIREBASE_APP = initializeApp(FIREBASE_CONFIG);
	const FIREBASE_ANALYTICS = getAnalytics(FIREBASE_APP);

	return {
		FIREBASE_APP,
		FIREBASE_ANALYTICS,
	};
}
