import React from 'react'
import { connect } from "react-redux";
import { increment, setAuth } from "../../redux/actions";
import AccountPagePublicMember from "./publicmember";
import AccountPageParliamentarian from "./parliamentarian";
import AccountPageSecretariat from "./secretariat";
import { Navigate } from "react-router-dom";

const AccountRoot = (props) => {

    if(!props.auth){
        return <Navigate to="/auth"/>
      }
    
    return (
            <>
            {
            props.auth?.type === "p_mem" ?  
            <AccountPagePublicMember/>: 
            props.auth?.type === "parl" ?  
            <AccountPageParliamentarian/> : 
            <AccountPageSecretariat/>
            }
            </>     
    )
}

const mapStateToProps = (state) => ({
    //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    count: state.count,
    auth: state.auth,
  });
  
  const mapDispatchToProps = (dispatch) => {
    //this will allow you to dispatch actions from anywhere in the compoonent
    return {
      increment: (num) => dispatch(increment(num)),
      setAuth: (user) => dispatch(setAuth(user)),
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(AccountRoot);
  
