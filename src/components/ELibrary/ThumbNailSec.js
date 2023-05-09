import { useState } from "react";
import Button from "@mui/joy/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import DeleteIcon from "@mui/icons-material/Delete";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import CancelIcon from "@mui/icons-material/Cancel";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import Loading from "../../animations/Loading";
import { db } from "../../firebase";
import { doc, deleteDoc } from "firebase/firestore";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";


const ThumbnailSec = ({ id, document, setIsLoading, getDocuments }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const deleteDocument = async()=>{
    try{
      setIsLoading(true);
      await deleteDoc(doc(db, "elibrary", document.docID));
      throwToast("success", "Document Successully deleted");
      onCloseModal();
      getDocuments();
    }catch(e){
      console.log(e);
      throwToast("error", "Error deleting document")
    }
  }


  return (
    <div className="thumbnail__container roww">
      <div className="thumbnail__date column">
        <p className="thumbnail__date__day">{moment(document.data).date()}</p>
        <p className="thumbnail__date__month">
          {moment(document.data).format("MMM")}
        </p>
        <p className="thumbnail__date__year">
          {moment(document.data).format("YYYY")}
        </p>
      </div>
      <div className="thumbnail__inner">
        <h3 className="thumbnail__inner__title">{document.title}</h3>
        {/* Group */}
        <p className="thumbnail__inner__group">{document.group}</p>

        <div className="roww">
          <Button
            style={{ borderRadius: 50, marginRight: "10px" }}
            onClick={() => {
              navigate(`/doc/${document.docID}`);
            }}
            variant="soft"
            color="neutral"
            sx={{ color: "black" }}
          >
            <VisibilityIcon />
          </Button>
          <Button
            style={{ borderRadius: 50, marginRight: "10px" }}
            onClick={() => {
              navigate(`/editdoc/${document.docID}`);
            }}
            variant="soft"
            color="neutral"
            sx={{ color: "black" }}
          >
            <ModeEditIcon />
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
      </div>

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

export default ThumbnailSec;
