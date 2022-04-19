// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
    getAuth,
    signInWithPopup,
    signInWithRedirect,
    GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD6tzxa6fZ9-PemDEvBq5yua3nAnN5cd-k",
    authDomain: "crwn-clothing-db-dc0da.firebaseapp.com",
    projectId: "crwn-clothing-db-dc0da",
    storageBucket: "crwn-clothing-db-dc0da.appspot.com",
    messagingSenderId: "214583367156",
    appId: "1:214583367156:web:a3e792a51d1c06e1dc95a1",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    const userDocRef = doc(db, "users", userAuth.uid);

    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        
        try {
            await setDoc(userDocRef, { 
                displayName, 
                email, 
                createdAt 
            });
        } catch (error) {
            console.log("error creating the user", error.message);
        }
    }
};