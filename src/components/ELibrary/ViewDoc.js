import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebase";
import { getDoc, doc } from "firebase/firestore";
import Loading from "../../animations/Loading";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import Button from "@mui/joy/Button/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import DownloadIcon from "@mui/icons-material/Download";

const ViewDoc = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [document, setDocument] = useState(null);
  const [title, setTitle] = useState("");
  const { docid } = useParams();
  console.log(docid);

  useEffect(()=>{
    fetchDoc();

  },[])

  const fetchDoc = async () => {
    try {
      setIsLoading(true);
      const docRef = doc(db, "elibrary", docid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setDocument(docSnap.data());
      } else {
        throwToast("error", "Document does not exist");
      }
    } catch (e) {
      throwToast("error", e.message);
    } finally {
      setIsLoading(false);
    }
  };
  
  useEffect(()=>{
    if(document){
      switch (document.category) {
        case "na_papers":
          setTitle("National Assembly Parliamentary Papers");
          break;
        case "na_committee":
          setTitle(" National Assembly Committee");
          break;
  
        case "na_budget":
          setTitle("National Assembly Budget Statements");
          break;
        case "sona":
          setTitle("SONA");
          break;
        case "oop":
          setTitle("OOP");
          break;
        case "nc_papers":
          setTitle("National Council Parliamentary Papers");
          break;
        case "nc_committee":
          setTitle("National Council Committee");
          break;
        case "bills":
          setTitle("Bills");
          break;
        case "acts":
          setTitle("Acts of Parliament");
          break;
        default:
      }
    }
  },[document])
  return (
    
    <div className="fadein pagepadding">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <h3 className="header-text u-margin-bottom-small">
            {title}
          </h3>
          <h2 className="document__title">{document ? document.title : ""}</h2>
          <div className="center-hrz">
            <div className="document__description">
              <p>{document ? document.description : ""}</p>
            </div>
          </div>

          <div className="roww" style={{ justifyContent: "space-evenly" }}>
            <Button
              startDecorator={<DownloadIcon />}
              style={{ borderRadius: 50, marginRight: "10px", width: "50%" }}
              onClick={() => {
                if (document) {
                  window.location.replace(document.url);
                }
              }}
            >
              Download
            </Button>

            <Button
              startDecorator={<StarBorderIcon />}
              style={{ borderRadius: 50, width: "50%" }}
              onClick={() => {}}
              color="success"
              variant="soft"
            >
              Add to Favorites
            </Button>
          </div>
        </>
      )}
      <ToastContainer/>
    </div>
  );
};

export default ViewDoc;
