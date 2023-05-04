import React, {useState} from 'react'
import {auth} from "../../firebase";
import { signInWithEmailAndPassword } from 'firebase/auth';
import {connect} from "react-redux";
import { increment, setAuth  }  from "../../redux/actions";

const SignIn = (props) => {
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
            {props.count}
            {props.auth}
            <button onClick={()=>{props.increment(5)}}>Increment</button>
            <button onClick={()=>props.setAuth("Douglas")}>Set auth</button>
            <form onSubmit={signin}>
                <h1>Log In</h1>
                <input type="text" placeholder="enter your email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
                <input type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Log In</button>
            </form>
        </div>

    )
}

const mapStateToProps = state=>({ //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    count: state.count,
    auth: state.auth
  });
  
const mapDispatchToProps = dispatch=>{ //this will allow you to dispatch actions from anywhere in the compoonent
    return {
        increment: (num)=> dispatch(increment(num)),
        setAuth: (user)=> dispatch(setAuth(user))
    }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
  