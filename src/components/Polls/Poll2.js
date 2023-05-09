import { useState, useEffect } from "react";
import Logo from "../../assets/home/logo@2x.png";
import PollOption2 from "./PollOption2";
import ProgressBar from "@ramonak/react-progress-bar";
import { RadioGroup } from "react-radio-group";
import Loading from "../../animations/Loading";
import Button from "@mui/joy/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CancelIcon from "@mui/icons-material/Cancel";
import moment from "moment";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import DeleteIcon from "@mui/icons-material/Delete";
import { Modal } from "react-responsive-modal";
import { db } from "../../firebase";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { connect } from "react-redux";

const Poll2 = ({ data, setIsLoading,fetchPolls, auth }) => {
  const [selectedValue, setSelectedValue] = useState();
  const [pollData, setPollData] = useState(data);
  const [selected, setSelected] = useState("");
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const total = pollData.options.reduce((a, c) => {
    return a + c.votes_count;
  }, 0);


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

  const deleteDocument = async()=>{

    try {
      setIsLoading(true);
      onCloseModal();
      const body = {
        poll_id: data.id
      }
      await fetch(
        `https://api.pollsapi.com/v1/remove/poll`,
        {
          headers: {
            "api-key": process.env.REACT_APP_API_KEY,
            "Content-type": "application/json"
          },
          method: "POST",
          body: JSON.stringify(body)
        }
      );
      fetchPolls();
    } catch (e) {

      console.log(e);
    }
  }


  return (
    <div className="poll__container u-margin-bottom-small">
      <div className="poll__header roww">
        <img src={Logo} alt="logo" />
        <p> Parliament of Namibia</p>
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
      <div className="poll__options" style={{ marginBottom: "20px" }}>
          
            {pollData.options.map((opt, index) => {
              return (
                <PollOption2
                  label={opt.text}
                  percent={Math.round((opt.votes_count / total) * 100)}
                  numVotes={opt.votes_count}
                  key={`${pollData.id}-${index}`}
                />
              );
            })}
      </div>
      <div className="roww">
        <Button
          startDecorator={<StarBorderIcon />}
          style={{ borderRadius: 50, marginRight: "20px" }}
          onClick={() => {
            addToFaves();
          }}
          color="success"
          variant="soft"
        >
          Add to Favorites
        </Button>
        <Button
          style={{ borderRadius: 50, marginRight: "10px" }}
          onClick={onOpenModal}
          variant="soft"
          color="danger"
        >
          <DeleteIcon />
        </Button>
      </div>

      <ToastContainer />
      <Modal open={open} onClose={onCloseModal} center>
        <div className="u-padding">
          <h2 className="herader-text" style={{marginBottom: "15px"}}>Are you sure you want to delete?</h2>
          <div className="roww">
            <Button
              startDecorator={<DeleteIcon />}
              style={{ borderRadius: 50, marginRight: "20px" }}
              onClick={deleteDocument}
              color="danger"
              variant="soft"
            >
              Yes, Delete
            </Button>
            <Button
              startDecorator={<CancelIcon />}
              style={{ borderRadius: 50 }}
              onClick={onCloseModal}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});


export default connect(
  mapStateToProps,

)(Poll2);
