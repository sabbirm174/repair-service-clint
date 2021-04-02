import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './../firebaseConfig/Firebase.config';
import { MyContext } from './../../../App';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useHistory, useLocation } from 'react-router-dom';
import './signIn.css'

const SignIn = () => {
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [logedInUser, setLogedInUser] = useContext(MyContext);

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
            const {displayName,email} = user;
            const logedInUse = {userName:displayName,email}
            setLogedInUser(logedInUse);
            history.replace(from)
            console.log('name',logedInUser)
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
                <button className='btn btn-primary' onClick={handleGoogleSignIn}><FontAwesomeIcon icon={faGoogle} /> Continue with Google</button>
            </div>
        </div>
    );
};

export default SignIn;