import React from "react";
import Button from "@mui/joy/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const PSU = () => {
  let { type } = useParams();
  console.log(type);
  const navigate = useNavigate();
  return (
    <div className="fadein pagepadding">
      <div className="center-text u-margin-top u-margin-bottom-small">
        <p className="normal-light">
          Please sign in 
          {type === "p_mem" ? (
            <span>as a public member </span>
          ) : type === "parl" ? (
            <span>as a parliamentarian </span>
          ) : type === "sec" ? (
            <span>as a secretariat </span>
          ) : <span> </span>
        }
          to complete this action.
        </p>
      </div>
      <div className="column u-padding">
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "15px" }}
          onClick={() => {navigate("/signup")}}
        >
          Sign Up
        </Button>

        <Button
          endDecorator={<ChevronRightIcon color="black" />}
          style={{ borderRadius: 50 }}
          onClick={() => {navigate("/login")}}
          sx={{ color: "black" }}
          color="neutral"
        >
          Log In
        </Button>
      </div>
    </div>
  );
};

export default PSU;
