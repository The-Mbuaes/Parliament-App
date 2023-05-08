import React from "react";
import Button from "@mui/joy/Button";

const Thumbnail = () => {
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
        <Button
          style={{ borderRadius: 50, marginRight: "10px" }}
          onClick={() => {}}
          variant="soft"
          color="success"
        >
          Read Article
        </Button>
      </div>
    </div>
  );
};

export default Thumbnail;
