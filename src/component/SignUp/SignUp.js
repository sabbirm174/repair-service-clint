import React,{useContext, useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../config.firebase';
import { MyContext } from './../../App';
import { Link } from 'react-router-dom';
import './signUp.css'

const SignUp = () => {
    const [loggedInUser, setLoggedInUser] = useContext(MyContext)
    if(firebase.apps.length === 0){
        firebase.initializeApp(firebaseConfig);
    }
    const provider =  new firebase.auth.GoogleAuthProvider();
    
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

    //google sign up
    const googleSubmit = () =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            const credential = result.credential;

            const token = credential.accessToken;
            const user = result.user;
            // ...
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.email;
            const credential = error.credential;
        });

    }

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
            const newError = {...user}
            newError.success = false;
            setUser(newError);

            const isNotMatched = {...user};
            isNotMatched.matchPassword = ""
            setUser(isNotMatched);

            const isNotEmail = {...user};
            isNotEmail.invalidEmail = "";
            setUser(isNotEmail);

            if(user.password === user.confirmPassword){

                const isNotEmail = {...user};
                isNotEmail.invalidEmail = "";
                setUser(isNotEmail);

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
                const isNotMatched = {...user};
                isNotMatched.matchPassword = `password and confirm password did not matchd or <br/> invalid password please type at least 6 charecter and a numbur`
                setUser(isNotMatched); 
            }
        }//email finish
        else{
            const isNotEmail = {...user};
            isNotEmail.invalidEmail = `please enter a valid email address`
            setUser(isNotEmail);
        }
        e.preventDefault()
    }

     
    
    return (
        <div className='d-flex height justify-content-center align-items-center'>
            <div className= 'cu-border'>
                <form action="" onSubmit={handleSubmit}>
                    <br/><input type="text" placeholder="name" name='name' onBlur={handleFormValidation} required/><br/>
                    <br/><input type="text" placeholder="email" name='email' onBlur={handleFormValidation} required/><br/>
                    <br/><input type="password" placeholder="password" name='password' onBlur={handleFormValidation} required/><br/>
                    <br/><input type="password" placeholder="confirm password" name='confirmPassword' onBlur={handleFormValidation} required/><br/>
                    <input className='btn btn-primary' type="submit"/>
                </form>
                <button className='btn btn-primary'onClick={googleSubmit}>google</button>
                <p style={{color:"red"}}>{user.error}</p>
                <Link to="/login">Log in</Link>
                {user.success && <p style={{color:'green'}}>user created successfully</p> }
                {<p style={{color:"red"}}>{user.matchPassword}</p>}
                {<p style={{color:"red"}}>{user.invalidEmail}</p>}
            </div>
        </div>
    );
};

export default SignUp;
