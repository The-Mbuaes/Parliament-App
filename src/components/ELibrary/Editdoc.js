import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import Input from "@mui/joy/Input";
import Select from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import DoneIcon from "@mui/icons-material/Done";
import Button from "@mui/joy/Button";
import { nanoid } from "nanoid";
import { db, storage } from "../../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import Textarea from "@mui/joy/Textarea";
import { ToastContainer } from "react-toastify";
import { throwToast } from "../../helpers/throwToast";
import Loading from "../../animations/Loading";
import { useParams } from "react-router-dom";
import { FilePond, File, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";

const Editdoc = (props) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("na_papers");
  const [group, setGroup] = useState("");
  const [description, setDescription] = useState("");
  const [files, setFiles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [downloadURL, setDownloadURL] = useState("");
  const navigate = useNavigate();

  const { docid } = useParams();

  useEffect(() => {
    getDocument();
    console.log("oijoijoijo")
  }, []);

  const getDocument = async () => {
    try {
      setIsLoading(true);
      const docRef = doc(db, "elibrary", docid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const edoc = docSnap.data();
        setTitle(edoc.title);
        setCategory(edoc.category);
        setGroup(edoc.group);
        setDescription(edoc.description.replace(/<br\s*[\/]?>/gi, "\n"));
        setDownloadURL(edoc.url);
      } else {
        throwToast("error", "Document does not exist");
      }
    } catch (e) {
      throwToast("error", "Error Fetching Document");
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  if (!props.auth || props.auth.type !== "sec") {
    return <Navigate to="/" />;
  }

  const handleChange = (event, newValue) => {
    setCategory(newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updateNoFile = async () => {
      try {
        setIsLoading(true);
        const url = await uploadFile();
        const docref = doc(db, "elibrary", docid);
        await setDoc(docref, {
          docID: docid,
          title,
          category,
          description: description.replace(/\n\r?/g, "<br/>"),
          group,
          posted_by: props.auth.uid,
          date: new Date(),
          url: downloadURL,
        });
        throwToast("success", "Successfully added to the Elibrary");
        navigate("/account");
      } catch (e) {
        throwToast("error", e.message);
      } finally {
        setIsLoading(false);
      }
    };

    const uploadFile = async () => {
      try {
        const metadata = {
          contentType: files[0].type,
        };
        const storageRef = ref(storage, `elibrary/${files[0].name}`);
        const snapshot = await uploadBytes(storageRef, files[0], metadata);
        const url = await getDownloadURL(snapshot.ref);
        console.log(url);
        return url;
      } catch (e) {
        throwToast("error", e.message);
      }
    };

    const addDoc = async () => {
      try {
        setIsLoading(true);
        const url = await uploadFile();
        const docref = doc(db, "elibrary", docid);
        await setDoc(docref, {
          docID: docid,
          title,
          category,
          description: description.replace(/\n\r?/g, "<br/>"),
          group,
          posted_by: props.auth.uid,
          date: new Date(),
          url,
        });
        throwToast("success", "Successfully edited document");
        navigate("/account");
      } catch (e) {
        throwToast("error", e.message);
      } finally {
        setIsLoading(false);
      }
    };
    if (files.length < 1) {
        updateNoFile();
        return;
      }
    addDoc();
  };
  return (
    <div className="fadein u-padding u-padding-bottom-big">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="u-margin-bottom-small">
            <h3 className="header-text">Edit Document</h3>
          </div>

          <div className="">
            {isLoading ? (
              <Loading />
            ) : (
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "18px" }}>
                  <label htmlFor="title">Document Title</label>
                  <Input
                    placeholder="Enter Document Title"
                    color="primary"
                    required
                    id="title"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
                <div style={{ marginBottom: "18px" }}>
                  <label htmlFor="title">Document Category</label>
                  <Select
                    defaultValue="na_papers"
                    onChange={handleChange}
                    color="primary"
                  >
                    <Option value="na_papers" sx={{ color: "black" }}>
                      National Assembly Parliamentary Papers
                    </Option>
                    <Option value="na_committee" sx={{ color: "black" }}>
                      National Assembly Committee
                    </Option>
                    <Option value="na_budget" sx={{ color: "black" }}>
                      National Assembly Budget Statements
                    </Option>
                    <Option value="sona" sx={{ color: "black" }}>
                      SONA
                    </Option>
                    <Option value="oop" sx={{ color: "black" }}>
                      OOP
                    </Option>
                    <Option value="nc_papers" sx={{ color: "black" }}>
                      National Council Parliamentary Papers
                    </Option>
                    <Option value="nc_committee" sx={{ color: "black" }}>
                      National Council Committee
                    </Option>
                    <Option value="bills" sx={{ color: "black" }}>
                      Bills
                    </Option>
                    <Option value="acts" sx={{ color: "black" }}>
                      Acts of Parliament
                    </Option>
                  </Select>
                </div>
                <div style={{ marginBottom: "18px" }}>
                  <label htmlFor="group">Document Group</label>
                  <Input
                    placeholder="e.g Budget 2023 - 2024"
                    color="primary"
                    required
                    id="group"
                    value={group}
                    onChange={(e) => {
                      setGroup(e.target.value);
                    }}
                  />
                </div>
                <div style={{ marginBottom: "18px" }}>
                  <label htmlFor="description">Document Description</label>
                  <Textarea
                    placeholder="Short Description of the Document"
                    color="primary"
                    required
                    id="description"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                    minRows={3}
                    sx={{ whiteSpace: "pre-line" }}
                  />
                </div>
                <div className="u-margin-bottom-small">
                    <a href={downloadURL} style={{color: "#1F6603", fontSize: "20px"}}>View Document</a>
                </div>
                <div style={{ marginBottom: "18px" }}>
                  <FilePond
                    files={files}
                    allowMultiple={false}
                    acceptedFileTypes={["image/png"]}
                    onupdatefiles={(fileItems) => {
                      // Set currently active file objects to this.state
                      setFiles(fileItems.map((fileItem) => fileItem.file));
                    }}
                    name="files"
                    labelIdle='Drag & Drop your file or <span class="filepond--label-action">Browse</span>'
                  />
                </div>
                <Button
                  startDecorator={<DoneIcon />}
                  style={{ borderRadius: 50, marginRight: "10px" }}
                  type="submit"
                >
                  Edit Document
                </Button>
              </form>
            )}
          </div>
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

export default connect(mapStateToProps)(Editdoc);
