import React,{useContext, useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './../../config.firebase';
import { MyContext } from './../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './login.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faFacebook } from "@fortawesome/free-brands-svg-icons"
import { Link } from 'react-router-dom';






const LogedIn = () => {
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [loggedInUser, setLoggedInUser] = useContext(MyContext)
    // firebase configuration
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    //  provider
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    
    
    const [logedInUser, setLogedInUser] = useState({
        email:'',
        password:''
    })

    //errormessege
    const [isError, setIsError] = useState({
        error:""
    })

    const signInOnBlur = (e) =>{
        console.log("iyu")
        const newLoggedinuser = {...logedInUser};
        newLoggedinuser[e.target.name] = e.target.value;
        setLogedInUser(newLoggedinuser);
        console.log(newLoggedinuser.email)
    }


    //signin with email & password
    const handleSignIn = (e) =>{
        firebase.auth().signInWithEmailAndPassword(logedInUser.email, logedInUser.password)
        .then((userCredential) => {
            var user = userCredential.user;
            const email = user.email;
            const email1 = user.email;
            const name = email1.substring(0,email1.lastIndexOf("@"));
            const userInfo = {name, email};
            setLoggedInUser(userInfo)
            console.log(userInfo)
            history.replace(from); 
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            const newErr = {isError}
            newErr.error = errorMessage;
            setIsError(newErr)
            console.log(errorCode, errorMessage)
        });
        e.preventDefault();
    }

    // google sign in
    const googleSignIn = () =>{
        firebase.auth()
  .signInWithPopup(googleProvider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    const { displayName, email} = result.user;
    const userInfo = {name: displayName, email};
    setLoggedInUser(userInfo);
    history.replace(from);
    console.log(userInfo)
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
    }

    //facebook log in

    const handleFacebookLogin = ()=>{
        firebase
  .auth()
  .signInWithPopup(facebookProvider)
  .then((result) => {
     var credential = result.credential;
    var user = result.user;
    const displayName = user.displayName;
    const email = user.email
    const userInfo = {name: displayName, email};
    setLoggedInUser(userInfo);
    var accessToken = credential.accessToken;
    console.log(userInfo);
    history.replace(from);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log(errorMessage)
    // ...
  });
    }


    return (
        <div className="login-form-wraper d-flex align-items-center justify-content-center">
            <div className="login-form">
                <form action="" onSubmit={handleSignIn}>
                    email:<br/>
                    <input type="email" placeholder='enter your email' onBlur={signInOnBlur} name='email'/><br/><br/>
                    password:<br/>
                    <input type="password" placeholder='enter your password' onBlur={signInOnBlur} name='password'/><br/><br/>
                    <input type="submit" value="Log in"/>
                </form><br/>
                <button onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} /> Continue with google</button> <br/>
                <button onClick={handleFacebookLogin}><FontAwesomeIcon icon={faFacebook} /> Continue with facebook</button> <br/>
                <Link to='/signUp'>Create an Account</Link>
                <p>{isError.error}</p>
            </div>
        </div>
    );
};

export default LogedIn;