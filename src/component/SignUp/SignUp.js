import React,{useContext, useState} from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../../config.firebase';
import { MyContext } from './../../App';


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
        email:'',
        photo:'',
        error:'',
        success:false
    })

    //google sign up
    const googleSubmit = () =>{
        firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            var credential = result.credential;

            var token = credential.accessToken;
            var user = result.user;
            // ...
        }).catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
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
        if(isFormValid){
            let newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    // sign up with email and password
    const handleSubmit = (e) =>{
        console.log(user.email, user.password)
        if(user.email && user.password){
            
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((userCredential) => {
                var user = userCredential.user;
                const newError = {...user}
                newError.error ='';
                newError.success = true;
                setUser(newError);
            })
            .catch((error) => {
                var errorCode = error.code;
                var errorMessage = error.message;
                const newError = {...user}
                newError.error = errorMessage;
                newError.success = false;
                setUser(newError);
            });

        }
        e.preventDefault()
    }

    
    
    return (
        <div>

            <form action="" onSubmit={handleSubmit}>
                email: <br/><input type="text" name='email' onBlur={handleFormValidation} required/><br/>
                name: <br/><input type="text" name='name' onBlur={handleFormValidation} required/><br/>
                password: <br/><input type="password" name='password' onBlur={handleFormValidation} required/><br/>
                <input type="submit"/>
            </form>
            <button onClick={googleSubmit}>google</button>
            <p style={{color:"red"}}>{user.error}</p>
            {user.success && <p style={{color:'green'}}>user created successfully</p>}

            
        </div>
    );
};

export default SignUp;
