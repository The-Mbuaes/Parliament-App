import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Loading from "../../animations/Loading";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Poll from "../Polls/Poll";
const FavePolls = (props) => {
  const [polls, setPolls] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchPolls = async () => {
    try {
        setIsLoading(true);
      //first fetch the poll ids
      const docRef = doc(db, "favourites", props.auth.uid);
      const docSnap = await getDoc(docRef);
      const pollIDs = docSnap.data().surveys;
      //fetch
      const pollsArr = [];
      pollIDs.forEach(async(id) => {
        try{
            const pollJson = await fetch(`https://api.pollsapi.com/v1/get/poll/${id}`, {
                headers: {
                  "api-key": process.env.REACT_APP_API_KEY,
                },
                method: "GET",
              });
              const poll = await pollJson.json();
              pollsArr.push(poll.data);
              setPolls(pollsArr);
        }catch(e){
            throwToast("error", e.message);
        } finally{
            setIsLoading(false);
        }
      });
    } catch (e) {
      throwToast("error", e.message);
    }
  };

  useEffect(()=>{
    fetchPolls();
  },[])
  return (
    <div className="fadein pagepadding u-margin-bottom-big">
      <h3 className="header-text u-margin-bottom-small">Surveys</h3>

      {isLoading ? (
        <Loading />
      ) : (
        <>
          {polls.length > 0 ? (
            polls.map((poll) => <Poll data={poll} key={poll.id} />)
          ) : (
            <p>No results :(</p>
          )}
          <ToastContainer />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});

export default connect(mapStateToProps)(FavePolls);
