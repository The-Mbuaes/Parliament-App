import React from "react";
import Button from "@mui/joy/Button";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import VisibilityIcon from '@mui/icons-material/Visibility';
import moment from "moment";
import { useNavigate } from "react-router-dom";


const Thumbnail = ({id,document}) => {
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
          startDecorator={<VisibilityIcon/>}
          onClick={() => {
            navigate(`/doc/${document.docID}`);
          }}
        >
          Article Details
        </Button>
        <Button
          style={{ borderRadius: 50, marginRight: "10px" }}
          onClick={() => {navigate(`/editdoc/${document.docID}`)}}
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

export default Thumbnail;
