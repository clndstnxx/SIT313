
import React from "react"
import {Outlet, Link} from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase';
import { useState } from 'react';

function LoginPage ()
{
    const auth = getAuth(app);
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")

    // source: https://firebase.google.com/docs/auth/web/password-auth?authuser=0&hl=en#web-version-9
    const signIn = () => {
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Signed in.")
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode); 
        });
    }

    return <div style={{ border: '2px solid black', width: '300px', marginLeft:"500px", paddingBottom:"20px", paddingTop:"20px"}}>
        <Link to='/connect' style={{marginLeft:"206px", color:"#087cfc"}}> Sign up</Link><br></br><br></br>
        <label style={{marginLeft:"10px"}} for="eml"><b>Your email</b></label><br></br>
        <input type={"email"} style={{marginLeft:"10px", width:'95%'}} required for="eml" onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>

        <label style={{marginLeft:"10px"}} for="psw"><b>Your password</b></label><br></br>
        <input style={{marginLeft:"10px", width:'95%'}} type={"password"} required for="psw" onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br><br></br>

        <button style={{marginLeft:"10px", width:'95%', backgroundColor:"#087cfc", color:"white"}} onClick={signIn}>Sign In</button>

    </div>
}

export default LoginPage