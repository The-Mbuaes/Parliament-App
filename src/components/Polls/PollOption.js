import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";
import { Radio } from "react-radio-group";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";

const PollOption = ({
  label,
  percent,
  pollID,
  optionID,
  numVotes,
  setIsLoading,
  getResults,
  auth,
}) => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setValue(percent);
    }, 500);
  }, []);

  const castVote = async () => {
    setIsLoading(true);
    console.log(`https://api.pollsapi.com/v1/get/votes-with-identifier/${pollID}-${auth.uid}?offset=0&limit=30`);
    console.log(`${pollID}-${auth.uid}`);
    const addVote = async()=>{
        try {
            const data = {
              poll_id: pollID,
              option_id: optionID,
              identifier: `${pollID}-${auth.uid}`,
            };
            const respJson = await fetch(`https://api.pollsapi.com/v1/create/vote`, {
              headers: {
                "Content-Type": "application/json",
                "api-key": process.env.REACT_APP_API_KEY,
              },
              method: "POST",
              body: JSON.stringify(data),
            });
            const resp = await respJson.json();
            console.log(resp);
            getResults();
          } catch (e) {
            throwToast("error", "Error Casting Vote");
          }
    }

    try{
        const responseJSON2 = await fetch(`https://api.pollsapi.com/v1/get/votes-with-identifier/${pollID}-${auth.uid}?offset=0&limit=30`, {
            method: "GET",
            headers: {
                "Content-type": "application/json",
                "api-key": process.env.REACT_APP_API_KEY  
            }
        })
        const response2 = await responseJSON2.json();  
            response2.data.docs.forEach(async(doc)=>{
                //create the new body
                const bodyObj2 = {
                    vote_id: doc.id
                }
                //remove each vote
                const respJson = await fetch("https://api.pollsapi.com/v1/remove/vote", {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json",
                        "api-key": process.env.REACT_APP_API_KEY   
                    },
                    body: JSON.stringify(bodyObj2)
                });
                const resp = await respJson.json();
            console.log(resp);
            })
            addVote();
    }catch(e){
        throwToast("error", "Error Casting Vote")
    }
    


  };
  return (
    <div className="u-margin-bottom-small">
      {/* <FormControlLabel value={label} control={<Radio />} label="Female" /> */}
      <div
        className="u-margin-bottom-tiny"
        style={{ display: "inline-block" }}
        onClick={castVote}
      >
        <Radio value="apple" /> {label}
      </div>
      <div className="u-margin-bottom-tiny">
        <ProgressBar
          completed={value}
          bgColor={"#1F6603"}
          baseBgColor={"#DCC091"}
          labelSize={"12px"}
        />
      </div>
      <p>{numVotes} votes</p>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});

export default connect(mapStateToProps)(PollOption);
