import React from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';


const Login = () => {

    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const handleGoogleSignIn = () =>{
        var googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
        .signInWithPopup(googleProvider)
        .then((result) => {
            var credential = result.credential;
            var token = credential.accessToken;
            var user = result.user;
            const {displayName,email,photoURL} = user;
            console.log('name',user)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage)
        });
    }

    return (
        <div className="mt-5 sign-in-wrapper d-flex align-items-center justify-content-center">
            <div>
                <button className='btn btn-primary' onClick={handleGoogleSignIn}> Continue with Google</button>
            </div>
        </div>
    );
};

export default Login;