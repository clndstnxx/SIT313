import React from "react";
import {Outlet, Link} from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from './firebase'
import { useState } from 'react';

function SignupPage()
{
    const auth = getAuth(app);
    const [email, setEmail]= useState("")
    const [password, setPassword] = useState("")
  
    // source: https://firebase.google.com/docs/auth/web/password-auth?authuser=0&hl=en#web-version-9
    const signUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            alert("Your account has been created");
        })
        .catch((error) => {
            const errorCode = error.code;
            alert(errorCode);
        });
    }

    return <div style={{ border: '2px solid black', width: '350px', marginLeft:"500px", paddingBottom:"20px", paddingTop:"20px"}}>
        <label style={{marginLeft:"10px"}} for="name"><b>Name * </b></label>
        <input type={"username"} required name="name"></input><br></br><br></br>

        <label style={{marginLeft:"10px"}} for="email"><b>Email * </b></label>
        <input type={"email"} required for="email" onChange={(e) => setEmail(e.target.value)}></input><br></br><br></br>

        <label style={{marginLeft:"10px"}} for="password"><b>Password * </b></label>
        <input type={"password"}required for="password" onChange={(e) => setPassword(e.target.value)}></input><br></br><br></br><br></br>

        <label style={{marginLeft:"10px"}} for="cpassword"><b>Confirm Password * </b></label>
        <input type="password" required for="cpassword"></input><br></br><br></br><br></br>

        <button style={{marginLeft:"10px", width:'95%', backgroundColor:"#087cfc", color:"white"}}onClick={signUp}>Create Acc</button>

    </div>
}
export default SignupPage