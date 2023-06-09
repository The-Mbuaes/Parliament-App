import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setAuth } from "../../redux/actions";
import Button from "@mui/joy/Button";
import CancelIcon from "@mui/icons-material/Cancel";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DoneIcon from "@mui/icons-material/Done";
import Modal from "react-modal";
import Avatar from "react-avatar-edit";
import { auth, storage, db } from "../../firebase";
import { signOut } from "firebase/auth";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { collection, updateDoc, getDocs, query, where, doc, orderBy } from "firebase/firestore";
import Loading from "../../animations/Loading";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import ThumbnailSec from "../ELibrary/ThumbNailSec";

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
  const [isLoading, setIsLoading] = useState(false);
  const [isLoading2, setIsLoading2] = useState(false);
  const navigate = useNavigate();
  const [docs, setDocs] = useState([]);

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
    // if (elem.target.files[0].size > 71680) {
    //   console.log("iuiuhiu")
    //   throwToast("warning", "File is too big!");
    //   elem.target.value = "";
    // }
  }

  useEffect(()=>{
    getDocuments();
  }, [])

  const getDocuments = async () => {
    try {


      
      setIsLoading2(true);
      const collectionRef = collection(db, "elibrary");
      const q = query(collectionRef, where("posted_by", "==", props.auth.uid));
      const querySnapshot = await getDocs(q);
      const docArr = [];
      querySnapshot.forEach((doc) => {
        docArr.push(doc.data());
      });
      setDocs(docArr.sort((a,b)=>b.dateNum-a.dateNum));
    } catch (e) {
      throwToast("error", "Error Fetching Documents");
      console.log(e);
    } finally {
      setIsLoading2(false);
    }
  };

  async function uploadImage() {
    try {
      setIsLoading(true);
      const extension = preview.split(";")[0].split("/")[1];

      const base64Response = await fetch(preview);
      const blob = await base64Response.blob();
      const storageRef = ref(storage, `avatars/${props.auth.uid}.${extension}`);

      console.log(blob.type);
      const metadata = {
        contentType: blob.type,
      };
      const snapshot = await uploadBytes(storageRef, blob, metadata);
      const url = await getDownloadURL(snapshot.ref);
      //add image to auth obj on redux and on firebase
      //firebase
      const docref = doc(db, "users", props.auth.uid);
      await updateDoc(docref, {
        profilePic: url,
      });
      //auth
      props.setAuth({
        ...props.auth,
        profilePic: url,
      });
      //throwToast
      throwToast("success", "Profile Picture Successfully Updated");
      //close modal
      closeModal();
    } catch (e) {
      throwToast("error", e.message);
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="fadein pagepadding" style={{ paddingBottom: "50px" }}>
      <div
        className="column u-margin-bottom-small u-margin-top"
        style={{ alignItems: "center", textAlign: "center" }}
      >
        {props.auth?.profilePic === "" ? (
          <div
            className="account__pic"
            alt="Profile picture"
            onClick={openModal}
            style={{
              backgroundImage:
                "url(" + "https://i.ibb.co/ZTNqN7L/user.png" + ")",
            }}
          ></div>
        ) : (
          <div
            className="account__pic"
            alt="Profile picture"
            onClick={openModal}
            style={{ backgroundImage: `url(${props.auth.profilePic})` }}
          ></div>
        )}

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
      <div style={{ padding: "12px" }} className="u-margin-bottom-small">
        {/* <div className="account__detail">
        Name: {props.auth.fullName}
      </div> */}
        <div className="account__detail">
          Account Type: {props.auth.type_full}
        </div>
        <div className="account__detail">ID Number: {props.auth.id}</div>
        <div className="account__detail">Phone Number: {props.auth.phone}</div>
      </div>

      <div style={{ padding: "12px" }}>
        <h2 className="header-text u-margin-bottom-small">
          My E-Library documents
        </h2>
        <Button
          startDecorator={<AddIcon />}
          style={{ borderRadius: 50, marginRight: "10px" }}
          onClick={() => {
            navigate("/createdoc");
          }}
        >
          Add document
        </Button>
      </div>

      <div className="">
        {
          isLoading2 ? <Loading/> :
          <>
          {docs.map(doc=> <ThumbnailSec key={doc.docID} id={doc.docID} document={doc} setIsLoading={setIsLoading2} getDocuments={getDocuments}/>)}
          </>
        }
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
        </div>
        <div className="center-hrz--col">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              {preview ? (
                <img
                  src={preview}
                  className="u-margin-bottom account__preview"
                  alt="Preview"
                />
              ) : null}
              <Button
                startDecorator={<DoneIcon />}
                style={{ borderRadius: 50, marginRight: "10px" }}
                onClick={uploadImage}
              >
                Save
              </Button>
            </>
          )}
        </div>
      </Modal>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  //this will allow you to dispatch actions from anywhere in the compoonent
  return {
    setAuth: (user) => dispatch(setAuth(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPagePublicMember);
