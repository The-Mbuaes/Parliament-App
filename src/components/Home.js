import React from 'react'
import {connect} from "react-redux";
import { increment, setAuth  }  from "../redux/actions";
import { Link } from 'react-router-dom';

const Home = (props) => {
    return (
      <div className="page">

        <h2>Home page</h2>
        {
          props.auth? 
          <p>You are logged in as {props.auth.name}</p> :
          <p>You are not logged in</p> 
        }

      </div>
      
    )
}

const mapStateToProps = state=>({ //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    auth: state.auth
  });
  
  const mapDispatchToProps = dispatch=>{ //this will allow you to dispatch actions from anywhere in the compoonent
    return {
        increment: (num)=> dispatch(increment(num)),
        setAuth: (user)=> dispatch(setAuth(user))
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home);
