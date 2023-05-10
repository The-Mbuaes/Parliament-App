import React from "react";
import Button from "@mui/joy/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const Favourites = (props) => {
    
    const navigate = useNavigate();
    if (!props.auth || props.auth.type !== "p_mem") {
        return <Navigate to="/psu/normal" />;
    }
  return (
    <div className="fadein pagepadding">
      <h3 className="header-text u-margin-bottom">Favourites</h3>

      <div className="center-hrz">
        <div className="column u-padding" style={{width: "60vw"}}>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          Videos
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {
            navigate("/favourites/documents");
          }}
        >
          Documents
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          Profiles
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          Opinions
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          Issues
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          News
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {
            navigate("/favourites/surveys");
          }}
        >
          Surveys
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          Petitions
        </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
    //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    auth: state.auth,
  });
  
  export default connect(mapStateToProps)(Favourites);
  
