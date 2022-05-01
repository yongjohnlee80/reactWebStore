import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
    auth,
    signInWithGooglePopup,
    signInWithGoogleRedirect,
    createUserDocumentFromAuth,
} from "../Utils/firebase/firebase.utils";

import { SignUpForm } from "../sign-up-form/sign-up-form.component";

const SignIn = () => {
    useEffect(() => {
        async function getRedirectAuthToken() {
            const response = await getRedirectResult(auth);
            if (response) {
                const userDocRef = await createUserDocumentFromAuth(
                    response.user
                );
                console.log(response);
            }
        }
        getRedirectAuthToken();
    }, []);

    const logGoogleUser = async () => {
        const response = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(response.user);
    };

    return (
        <div>
            <h1>Sign In Page</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
            <button onClick={signInWithGoogleRedirect}>
                Sign in with Google Redirect
            </button>
            <SignUpForm />
        </div>
    );
};

export default SignIn;
