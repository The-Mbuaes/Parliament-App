import { useState, useEffect, useRef } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import Button from "@mui/joy/Button";
import AddIcon from "@mui/icons-material/Add";
import DoneIcon from "@mui/icons-material/Done";
import Chip from "@mui/joy/Chip";
import ChipDelete from "@mui/joy/ChipDelete";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import Loading from "../../animations/Loading";
const CreatePoll = (props) => {
  const navigate = useNavigate();
  const [options, setOptions] = useState([]);
  const [option, setOption] = useState("");
  const [question, setQuestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const inpRef = useRef(null);

  if (!props.auth || props.auth.type !== "parl") {
    return <Navigate to="/" />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (options.length < 2) {
      throwToast("warning", "Please make sure you have at least 2 options");
      return;
    }
    setIsLoading(true);
    const poll = {
      identifier: props.auth.uid,
      question,
      options: options.map((opt) => ({ text: opt })),
    };
    try {
      const resp = await fetch("https://api.pollsapi.com/v1/create/poll", {
        headers: {
          "Content-Type": "application/json",
          "api-key": process.env.REACT_APP_API_KEY,
        },
        method: "POST",
        body: JSON.stringify(poll),
      });
      console.log(resp);
      throwToast("success", "Survey Created!");
      navigate("/account");
    } catch (e) {
      console.log(e);
      throwToast("error", "Could not Create Survey");
    } finally {
    setIsLoading(false);
    }
  };
  return (
    <div className="fadein u-padding">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="u-margin-bottom-small">
            <h3 className="header-text">Create a Survey</h3>
            <p>
              Ask the general public a question. We will keep track of the
              results!
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ marginBottom: "18px" }}>
              <label htmlFor="question">Survey Question</label>
              <Input
                placeholder="Your Question"
                color="primary"
                required
                id="question"
                value={question}
                onChange={(e) => {
                  setQuestion(e.target.value);
                }}
              />
            </div>
            <div className="u-margin-bottom-tiny">
              <label htmlFor="option">Survey Options</label>
              <Input
                placeholder="Option"
                color="primary"
                id="option"
                value={option}
                onChange={(e) => {
                  setOption(e.target.value);
                }}
                ref={inpRef}
              />
            </div>
            <div className="u-margin-bottom-small">
              <Button
                startDecorator={<AddIcon />}
                style={{ borderRadius: 50, marginRight: "10px" }}
                onClick={() => {
                  if (option !== "") {
                    setOptions((prevState) => [...prevState, option]);
                    setOption("");
                  }
                }}
                variant="soft"
                color="success"
              >
                Add Option
              </Button>{" "}
              <br />
              <p style={{ marginTop: "8px" }}>Options</p>
              {options.map((opt, index) => (
                <Chip
                  style={{ marginRight: "5px", marginBottom: "5px" }}
                  variant="soft"
                  color="success"
                  key={index}
                  endDecorator={
                    <ChipDelete
                      onDelete={() => {
                        setOptions((prevState) =>
                          prevState.filter((elem) => elem !== opt)
                        );
                      }}
                    />
                  }
                >
                  {opt}
                </Chip>
              ))}
            </div>
            <Button
              startDecorator={<DoneIcon />}
              style={{ borderRadius: 50, marginRight: "10px" }}
              type="submit"
            >
              Create Survey
            </Button>
          </form>
        </>
      )}

      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});

export default connect(mapStateToProps)(CreatePoll);
