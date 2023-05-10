import {useState, useEffect} from 'react';
import { connect } from "react-redux";
import Loading from "../../animations/Loading";
import { throwToast } from "../../helpers/throwToast";
import { ToastContainer } from "react-toastify";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import Thumbnail from "../ELibrary/Thumbnail";

const FaveDocs = (props) => {
    const [docs, setDocs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    useEffect(() => {
        fetchDocuments();
      }, []);

    const fetchDocuments = async () => {
      try {
        setIsLoading(true);
        const docRef = doc(db, "favourites", props.auth.uid);
        const docSnap = await getDoc(docRef);
        const docArr = docSnap.data().elibrary;
        setDocs(docArr.sort((a, b) => b.dateNum - a.dateNum));
      } catch (e) {
        throwToast("error", e.message);
      } finally {
        setIsLoading(false);
      }
    };
  

    return (
      <div className="fadein pagepadding u-margin-bottom-big">
        <h3 className="header-text u-margin-bottom-small">Documents</h3>
  
        
        {isLoading ? (
          <Loading />
        ) : (
          <>
            {docs.length > 0 ? docs.map((doc) => (
              <Thumbnail id={doc.docID} document={doc} key={doc.docID} />
            )): <p>No results :(</p>
          
          }
            <ToastContainer />
          </>
        )}
      </div>
    );
}

const mapStateToProps = (state) => ({
    //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
    auth: state.auth,
  });
  
  export default connect(mapStateToProps)(FaveDocs);
  