import React, {useState} from 'react'
import {auth} from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const signin = (e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then(usercred=>console.log(usercred))
        .catch(e=>console.log(e));
    }
    return (
        <div className="sign-in-container">
            <form onSubmit={signin}>
                <h1>Log In</h1>
                <input type="text" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Log In</button>
            </form>
        </div>

    )
}

export default SignIn
