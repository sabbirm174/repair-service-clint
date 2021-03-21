import React,{useContext, useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../config.firebase';
import { MyContext } from './../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './signUp.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGoogle } from "@fortawesome/free-brands-svg-icons"
import { faFacebookF } from "@fortawesome/free-brands-svg-icons"


const SignUp = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext)
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }

    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const facebookProvider = new firebase.auth.FacebookAuthProvider();
    
    const [user,setUser] = useState({
        isSignin: false,
        name: '',
        password:'',
        confirmPassword:'',
        email:'',
        photo:'',
        error:'',
        invalidEmail:'',
        matchPassword:'',
        success:false
    })

    //form validation
    const handleFormValidation = (e) =>{
        let isFormValid ;
        if(e.target.name === 'email'){
            isFormValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            isFormValid = /\d{1}/.test(e.target.value) && (e.target.value.length > 6)
            
        }
        if(e.target.name === 'confirmPassword'){
            isFormValid = /\d{1}/.test(e.target.value) && (e.target.value.length > 6)
        }
            if(isFormValid){
            let newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    // sign up with email and password
    const handleSubmit = (e) =>{
        let newError = {...user}

        if(user.email){
            // remove success message for next time sign up
            
            newError.success = false;
            newError.matchPassword = ""
            newError.invalidEmail = "";

            if(user.password === user.confirmPassword){
                newError.invalidEmail = "";
                firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                const user = userCredential.user;
                const newError = {...user}
                newError.error ='';
                newError.success = true;
                setUser(newError);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const newError = {...user}
                newError.error = errorMessage;
                newError.success = false;
                setUser(newError);
            });
            }// password finish
            else{
                newError.matchPassword = `password and confirm password did not matchd`
            }
        }//email finish
        else{
            newError.invalidEmail = `please enter a valid email address`
        }
        e.preventDefault()
        setUser(newError);
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
        <div className='d-flex sign-up-wrapper justify-content-center align-items-center'>
            <div className= 'cu-border'>
                <h2>Create Your Account</h2>
                <form action="" onSubmit={handleSubmit} className="text-center">
                    <br/><input type="text" placeholder="name" name='name' onBlur={handleFormValidation} required/><br/>
                    <br/><input type="text" placeholder="email" name='email' onBlur={handleFormValidation} required/><br/>
                    <br/><input type="password" placeholder="password" name='password' onBlur={handleFormValidation} required/><br/>
                    <br/><input type="password" placeholder="confirm password" name='confirmPassword' onBlur={handleFormValidation} required/><br/>
                    <input className='btn btn-primary submit' value="create an account" type="submit"/>
                    <h6>Already Have an account <Link to="/login">Log in</Link></h6>
                </form>

                <div className="text-center social-btn">
                    <h6>or, sign in with</h6>
                    <button className="btn btn-warning" onClick={googleSignIn}><FontAwesomeIcon className="fontawsome" icon={faGoogle} /> Continue with google</button><br/>
                    <button className="btn btn-primary" onClick={handleFacebookLogin}><FontAwesomeIcon className="fontawsome" icon={faFacebookF} /> Continue with facebook</button>
                </div>

                
                
                <p style={{color:"red"}}>{user.error}</p>
                {user.success && <p style={{color:'green'}}>user created successfully</p> }
                {<p style={{color:"red"}}>{user.matchPassword}</p>}
                {<p style={{color:"red"}}>{user.invalidEmail}</p>}
            </div>
        </div>
    );
};

export default SignUp;
