import React, { useState } from "react";
import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((usercred) => console.log(usercred))
      .catch((e) => console.log(e));
  };
  return (
    <div className="page">
        <h3 className='header-text u-margin-bottom'>Account</h3>
        <div className="center-hrz--col center-vert" style={{height: "70vh"}}>
        <p className="normal-text u-margin-bottom-small">Who are you signing up as?</p>
        <Button onClick={()=>{navigate("/signup/parliamentarian")}} endDecorator={<KeyboardArrowRight />} style={{ borderRadius: 50 }}>Parliamentarian</Button> <br/>
        <Button endDecorator={<KeyboardArrowRight />} style={{ borderRadius: 50 }}>Secretariat</Button> <br/>
        <Button endDecorator={<KeyboardArrowRight />} style={{ borderRadius: 50 }}>Public Member</Button> 
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

export default SignUp;
