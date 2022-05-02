import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

// import {
//     auth,
//     signInWithGooglePopup,
//     signInWithGoogleRedirect,
//     createUserDocumentFromAuth,
// } from "../../Utils/firebase/firebase.utils";

import { SignUpForm } from "../sign-up-form/sign-up-form.component";
import { SignInForm } from "../sign-in-form/sign-in-form.component";

import './authentication.styles.scss';

const Authentication = () => {
    // useEffect(() => {
    //     async function getRedirectAuthToken() {
    //         const response = await getRedirectResult(auth);
    //         if (response) {
    //             const userDocRef = await createUserDocumentFromAuth(
    //                 response.user
    //             );
    //             console.log(response);
    //         }
    //     }
    //     getRedirectAuthToken();
    // }, []);

    return (
        <div className="authentication-container">
            <SignInForm />
            <SignUpForm />
        </div>
    );
};

export default Authentication;
