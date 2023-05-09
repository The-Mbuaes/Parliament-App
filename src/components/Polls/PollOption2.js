import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";
import { Radio } from "react-radio-group";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import Dottest from "./DotTest";

const PollOption = ({
  label,
  percent,
  numVotes,
}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setValue(percent);
    }, 500);
  }, []);

  return (
    <div style={{marginBottom: "10px"}}>
      {/* <FormControlLabel value={label} control={<Radio />} label="Female" /> */}
      <div
        className="u-margin-bottom-tiny"
        style={{ display: "inline-block" }}
      >
        {label}
      </div>
      <div className="u-margin-bottom-tiny">
        <ProgressBar
          completed={value}
          bgColor={"#1F6603"}
          baseBgColor={"#DCC091"}
          labelSize={"12px"}
        />
      </div>
      <p>
        {numVotes} Vote
        {numVotes > 1 || numVotes ==0  ? <span>s</span> : <span></span>}
      </p>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});

export default connect(mapStateToProps)(PollOption);
