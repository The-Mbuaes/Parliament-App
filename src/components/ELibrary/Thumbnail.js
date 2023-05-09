import React from "react";
import Button from "@mui/joy/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from '@mui/icons-material/Visibility';
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";


import { db } from "../../firebase";
import { doc, updateDoc, arrayUnion, collection, getDocs,setDoc } from "firebase/firestore";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";

const Thumbnail = ({id,document, auth}) => {
  const navigate = useNavigate();

  const addToFaves = async()=>{
    try{
      const docRef = doc(db, "favourites", auth.uid);
      await updateDoc(docRef, {
        elibrary:  arrayUnion(document)
      })
      throwToast("success", "Successfully added to favourites");
      console.log(auth.uid);
    }catch(e){
      console.log(e);
    }
  }

  
  return (
    <div className="thumbnail__container roww">
      <div className="thumbnail__date column">
        <p className="thumbnail__date__day">{moment(document.data).date()}</p>
        <p className="thumbnail__date__month">{moment(document.data).format('MMM')}</p>
        <p className="thumbnail__date__year">{moment(document.data).format('YYYY')}</p>
      </div>
      <div className="thumbnail__inner">
        <h3 className="thumbnail__inner__title">{document.title}</h3>
        {/* Group */}
        <p className="thumbnail__inner__group">{document.group}</p>

        <div className="roww">
        <Button
          style={{ borderRadius: 50, marginRight: "10px" }}
          startDecorator={<VisibilityIcon/>}
          onClick={() => {
            navigate(`/doc/${document.docID}`);
          }}
        >
          Article Details
        </Button>
        <Button
          style={{ borderRadius: 50, marginRight: "10px" }}
          onClick={() => {
            addToFaves();
          }}
          variant="soft"
          color="success"
          sx={{color: "black"}}
        >
          <StarBorderIcon/>
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


export default connect(
  mapStateToProps,

)(Thumbnail);
