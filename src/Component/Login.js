import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebase.Config';
import { MyContext } from './../App';


const Login = () => {
    
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUsser,setLoggedInUser] = useContext(MyContext);

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
            const logedInUse = {userName:displayName,email,photoURL}
            setLoggedInUser(logedInUse);
            setUserToken()
            history.replace(from)
            console.log('name',user)
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
            console.log(errorMessage)
        });
    }

    const setUserToken = ()=>{
        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
            sessionStorage.setItem('token', idToken)
          }).catch(function(error) {
            // Handle error
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

export default Login;