import { useCallback, useState } from "react";
import Pencil from "../../assets/home/-icon-pencil.svg";
import { connect } from "react-redux";
import { increment, setAuth } from "../../redux/actions";
import Button from "@mui/joy/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from '@mui/icons-material/Done';
import { useAuth } from "../../context/AuthContext";
import { auth, storage } from "../../firebase";
import { signOut } from "firebase/auth";
import Modal from "react-modal";
import Avatar from "react-avatar-edit";
import User from "../../assets/user.png";
import { ref, uploadBytes, getDownloadURL, uploadString, uploadBytesResumable } from "firebase/storage";

const customStyles = {
  content: {
    paddingTop: "70px",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    height: "90%",
  },
};

Modal.setAppElement("#root");

const AccountPagePublicMember = (props) => {
  // let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [preview, setPreview] = useState(null);
  const [src, setSrc] = useState("");

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

  function onClose() {
    setPreview(null);
  }

  function onCrop(preview) {
    setPreview(preview);
  }

  function onBeforeFileLoad(elem) {
    if (elem.target.files[0].size > 71680) {
      alert("File is too big!");
      elem.target.value = "";
    }
  }


  async function uploadImage(){
    try{
      const extension = preview.split(';')[0].split('/')[1];

      const base64Response = await fetch(preview);
      const blob = await base64Response.blob();
      const storageRef = ref(storage, `avatars/${props.auth.uid}.${extension}`);


      console.log(blob.type)
      const metadata = {
        contentType: blob.type
      };
      const snapshot = await uploadBytes(storageRef,blob, metadata);

      getDownloadURL(snapshot.ref).then( url => console.log(url));
      //add image to auth obj on redux and on firebase
    }catch(e){
      console.log(e);
    }finally{

    }
    
  }

  return (
    <div className="fadein">
      <div
        className="roww u-margin-bottom-small u-margin-top"
        style={{ justifyContent: "space-around" }}
      >
        <div
          className="account__pic"
          alt="Profile picture"
          onClick={openModal}
        ></div>
        <div className="column">
          <h2 className="header-text u-margin-bottom-small">
            {props.auth.fullName}
          </h2>
          <div className="roww" style={{ justifyContent: "space-between" }}>
            <Button
              startDecorator={<ModeEditIcon />}
              style={{ borderRadius: 50, marginRight: "10px" }}
              onClick={() => {}}
            >
              Edit Profile
            </Button>{" "}
            <br />
            <Button
              startDecorator={<CancelIcon />}
              style={{ borderRadius: 50 }}
              onClick={() => {
                signOut(auth);
                props.setAuth(null);
              }}
              color="danger"
              variant="soft"
            >
              Sign Out
            </Button>{" "}
            <br />
          </div>
        </div>
      </div>

      <div className="center-hrz">
        <div className="account__header">
          <h3 style={{ fontWeight: "500" }}>Account Details</h3>
        </div>
      </div>
      <div style={{ padding: "12px" }}>
        {/* <div className="account__detail">
        Name: {props.auth.fullName}
      </div> */}
        <div className="account__detail">
          Account Type: {props.auth.type_full}
        </div>
        <div className="account__detail">ID Number: {props.auth.id}</div>
        <div className="account__detail">Phone Number: {props.auth.phone}</div>
        <div className="account__detail">
          Constituency: {props.auth.constituency}
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <Button
          startDecorator={<CancelIcon />}
          style={{
            borderRadius: 50,
            position: "absolute",
            top: "10px",
            right: "10px",
          }}
          onClick={closeModal}
          color="danger"
          variant="soft"
        >
          Close
        </Button>
        <div className="center-hrz--col u-margin-bottom">
          <Avatar
            width={312}
            height={295}
            onCrop={onCrop}
            onClose={onClose}
            onBeforeFileLoad={onBeforeFileLoad}
            src={src}
          />
          {
            preview ? <img src={preview} className="u-margin-top" alt="Preview" /> : null
          }
          
        </div>
        <div className="center-hrz">
        <Button
          startDecorator={<DoneIcon />}
          style={{ borderRadius: 50, marginRight: "10px" }}
          onClick={uploadImage}
        >
          Save
        </Button>
        </div>

      </Modal>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  count: state.count,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  //this will allow you to dispatch actions from anywhere in the compoonent
  return {
    increment: (num) => dispatch(increment(num)),
    setAuth: (user) => dispatch(setAuth(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPagePublicMember);
