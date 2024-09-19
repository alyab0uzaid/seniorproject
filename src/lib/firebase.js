import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'; // Import getAuth stuff

const firebaseConfig = {
	apiKey: 'AIzaSyCHdf8tVDVOtTazjvC0h1PyKwqNifWfqww',
	authDomain: 'trackmysci.firebaseapp.com',
	projectId: 'trackmysci',
	storageBucket: 'trackmysci.appspot.com',
	messagingSenderId: '94634841161',
	appId: '1:94634841161:web:ded58b1dc49db1f1dc1b98',
	measurementId: 'G-6JR45C2DBF'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Only initialize Analytics if it's supported in the environment
if (typeof window !== 'undefined') {
	import('firebase/analytics')
		.then(({ getAnalytics }) => {
			getAnalytics(app);
		})
		.catch((error) => {
			console.log('Analytics not supported:', error);
		});
}

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

// Functions to handle login and logout
export const loginWithGoogle = () => {
	return signInWithPopup(auth, provider);
};

export const logout = () => {
	return signOut(auth);
};
