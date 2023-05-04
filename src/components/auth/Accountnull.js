import React from 'react'
import {connect} from "react-redux";
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { Link, useNavigate } from 'react-router-dom';


const AccountNull = () => {
    const navigate = useNavigate();
    return (
        <div className="page">
        <h3 className='header-text u-margin-bottom'>Account</h3>
        <div className="center-hrz--col center-vert" style={{height: "70vh"}}>
        <p className="normal-text u-margin-bottom-small">You are not signed in</p>
        <Button endDecorator={<KeyboardArrowRight />} style={{ borderRadius: 50 }} onClick={()=>{navigate("/signup")}}>Sign Up</Button> <br/>
        <Button endDecorator={<KeyboardArrowRight />} style={{ borderRadius: 50, color: "black" }} color="neutral" onClick={()=>{navigate("/login")}}>Log In</Button>
        </div>
        </div>
    )
}


const mapStateToProps = state=>({ //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    auth: state.auth
  });
  
  
export default connect(mapStateToProps)(AccountNull);