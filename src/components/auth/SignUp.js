import React, {useState} from 'react'
import {auth} from "../../firebase";
import { createUserWithEmailAndPassword } from 'firebase/auth';


const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signup = (e)=>{
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
        .then(usercred=>console.log(usercred))
        .catch(e=>console.log(e));
    }
    return (
        <div className="sign-in-container">
            <form onSubmit={signup}>
                <h1>Create an Account</h1>
                <input type="text" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Sign Up</button>
            </form>
        </div>

    )
}

export default SignUp
