import React from "react";
import Button from "@mui/joy/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import moment from "moment";
import { useNavigate } from "react-router-dom";


const ThumbnailSec = ({id,document}) => {
  const navigate = useNavigate();
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
          onClick={() => {}}
          variant="soft"
          color="neutral"
          sx={{color: "black"}}
        >
          <VisibilityIcon/>
        </Button>
        <Button
          style={{ borderRadius: 50, marginRight: "10px" }}
          onClick={() => {navigate(`/editdoc/${document.docID}`)}}
          variant="soft"
          color="neutral"
          sx={{color: "black"}}
        >
          <ModeEditIcon/>
        </Button>

        <Button
          style={{ borderRadius: 50, marginRight: "10px" }}
          onClick={() => {}}
          variant="soft"
          color="danger"
        >
          <DeleteIcon/>
        </Button>
        </div>
        
      </div>
    </div>
  );
};

export default ThumbnailSec;
