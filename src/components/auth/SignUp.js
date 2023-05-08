import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate, Navigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { connect } from "react-redux";

const SignUp = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((usercred) => console.log(usercred))
      .catch((e) => console.log(e));
  };
  if(props.auth){
    return <Navigate to="/account"/>
  }
  return (
    <div className="page">
        <h3 className='header-text u-margin-bottom'>Account</h3>
        <div className="center-hrz--col center-vert" style={{height: "70vh"}}>
        <p className="normal-text u-margin-bottom-small">Who are you signing up as?</p>
        <div className="column u-padding">
            <Button onClick={()=>{navigate("/signup/parliamentarian")}} endDecorator={<KeyboardArrowRight />} style={{ borderRadius: 50 }}>Parliamentarian</Button> <br/>
            <Button onClick={()=>{navigate("/signup/secretariat")}} endDecorator={<KeyboardArrowRight />} style={{ borderRadius: 50 }}>Secretariat</Button> <br/>
            <Button onClick={()=>{navigate("/signup/publicmember")}} endDecorator={<KeyboardArrowRight />} style={{ borderRadius: 50 }}>Public Member</Button> 
        </div>
        </div>
      {/* <form className="form__margin">
        <div className="center-hrz--col">
          <input
            className="input-textbox u-margin-left u-margin-right"
            type="email"
            placeholder="Business Email *"
            required
          />
          <input
            className="input-textbox u-margin-left u-margin-right"
            type="url"
            name="url"
            id="url"
            placeholder="Business website: https://example.com"
            pattern="https://.*"
            size="30"
            required
          />
        </div>
      </form> */}
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});

export default connect(mapStateToProps)(SignUp);
