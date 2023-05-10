import { useState, useEffect } from "react";
import Logo from "../../assets/home/logo@2x.png";
import PollOption from "./PollOption";
import { db } from "../../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import Loading from "../../animations/Loading";
import Button from "@mui/joy/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import moment from "moment";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import { connect } from "react-redux";


const Poll = ({ data, auth }) => {
  const [selectedValue, setSelectedValue] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [pollData, setPollData] = useState(data);
  const [selected, setSelected] = useState("");
  const [showResults, setShowResults] = useState(false);

  const total = pollData.options.reduce((a, c) => {
    return a + c.votes_count;
  }, 0);

  const getResults = async () => {
    try {
      const respJson = await fetch(
        `https://api.pollsapi.com/v1/get/poll/${data.id}`,
        {
          headers: {
            "api-key": process.env.REACT_APP_API_KEY,
          },
          method: "GET",
        }
      );
      const resp = await respJson.json();
      setPollData(resp.data);
    } catch (e) {
      throwToast("error", "error getting results");
    } finally {
      setIsLoading(false);
    }
  };
  const addToFaves = async()=>{
    try{
      const docRef = doc(db, "favourites", auth.uid);
      await updateDoc(docRef, {
        surveys:  arrayUnion(data.id)
      })
      throwToast("success", "Successfully added to favourites");
      console.log(auth.uid);
    }catch(e){
      console.log(e);
    }
  }

  return (
    <div className="poll__container u-margin-bottom-small">
      <div className="poll__header roww">
        <img src={Logo} alt="logo" />
        <p> Parliament of Namibia </p>
        <p style={{ color: "#434343" }}>
          {" "}
          | {moment(pollData.created_at).fromNow()}
        </p>
      </div>
      <p className="poll__question">{pollData.question}</p>
      <p className="poll__total">
        {total} Vote
        {total > 1 || total == 0 ? <span>s</span> : <span></span>}
      </p>
      <div className="poll__options u-margin-top-small">
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {pollData.options.map((opt) => {
              const classProp =
                opt.id === selected
                  ? "dot__container-active"
                  : "dot__container";
              return (
                <PollOption
                  label={opt.text}
                  percent={Math.round((opt.votes_count / total) * 100)}
                  pollID={pollData.id}
                  optionID={opt.id}
                  numVotes={opt.votes_count}
                  key={opt.id}
                  setIsLoading={setIsLoading}
                  getResults={getResults}
                  setSelected={setSelected}
                  classProp={classProp}
                  showResults={showResults}
                  setShowResults={setShowResults}
                />
              );
            })}
          </>
        )}
      </div>

      <Button
        startDecorator={<StarBorderIcon />}
        style={{ borderRadius: 50 }}
        onClick={() => {
          addToFaves();
        }}
        color="success"
        variant="soft"
      >
        Add to Favorites
      </Button>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});


export default connect(
  mapStateToProps,

)(Poll);
