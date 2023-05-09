import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import Loading from "../../animations/Loading";
import Poll from "./Poll";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";

const AllPolls = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetchPolls();
  }, []);
  const fetchPolls = async () => {
    try {
      setIsLoading(true);
      const respJson = await fetch(
        `https://api.pollsapi.com/v1/get/polls?offset=0&limit=30`,
        {
          headers: {
            "api-key": process.env.REACT_APP_API_KEY,
          },
          method: "GET",
        }
      );
      const resp = await respJson.json();
      setPolls(resp.data.docs);
    } catch (e) {
      throwToast("error", "Error Fetching Surveys");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };
  if (!props.auth || props.auth.type !== "p_mem") {
    return <Navigate to="/psu/p_mem" />;
  }
  return (
    <div className="fadein pagepadding">
      <h3 className="header-text u-margin-bottom-small">Surveys</h3>
      <div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {polls.length > 0? polls.map((poll) => (
              <Poll data={poll} key={poll.id} />
            )): <p>No results :(</p>
          
          }
          </>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});

export default connect(mapStateToProps)(AllPolls);
