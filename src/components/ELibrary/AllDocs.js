import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../animations/Loading";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import { db } from "../../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";
import Thumbnail from "./Thumbnail";

const AllDocs = () => {
  const { doccat } = useParams();
  const [docs, setDocs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("");

  const fetchDocuments = async () => {
    try {
      setIsLoading(true);
      const collectionRef = collection(db, "elibrary");
      const q = query(collectionRef, where("category", "==", doccat));
      const querySnapshot = await getDocs(q);
      const docArr = [];
      querySnapshot.forEach((doc) => {
        docArr.push(doc.data());
      });
      setDocs(docArr.sort((a, b) => b.dateNum - a.dateNum));
    } catch (e) {
      throwToast("error", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
    switch (doccat) {
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
  }, []);
  return (
    <div className="fadein pagepadding u-margin-bottom-big">
      <h3 className="header-text u-margin-bottom-small">{title}</h3>

      
      {isLoading ? (
        <Loading />
      ) : (
        <>
          {docs.length > 0 ? docs.map((doc) => (
            <Thumbnail id={doc.docID} document={doc} key={doc.docID}/>
          )): <p>No results :(</p>
        
        }
          <ToastContainer />
        </>
      )}
    </div>
  );
};

export default AllDocs;
