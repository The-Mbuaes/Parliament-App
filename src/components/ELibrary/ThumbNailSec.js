import React from "react";
import Button from "@mui/joy/Button";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';


const ThumbnailSec = () => {
  return (
    <div className="thumbnail__container roww">
      <div className="thumbnail__date column">
        <p className="thumbnail__date__day">29</p>
        <p className="thumbnail__date__month">Mar</p>
        <p className="thumbnail__date__year">2023</p>
      </div>
      <div className="thumbnail__inner">
        <h3 className="thumbnail__inner__title">Vote 19: industrialization & Trade</h3>
        {/* Group */}
        <p className="thumbnail__inner__group">Budget 2023 - 2024</p>

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
          onClick={() => {}}
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
