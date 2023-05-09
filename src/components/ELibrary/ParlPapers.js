import Button from "@mui/joy/Button/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
const ParlPapers = () => {
  const navigate = useNavigate();

  return (
    <div className="pagepadding u-margin-bottom-big fadein">
      <div className="account__header center-text u-margin-top u-margin-bottom-tiny">
        <h3 style={{ fontWeight: "500" }}>National Assembly</h3>
      </div>

      <div className="center-hrz">
        <div className="column u-padding">
          <Button
            endDecorator={<ChevronRightIcon />}
            style={{ borderRadius: 50, marginBottom: "21px" }}
            onClick={() => {
              navigate("/elibrary/docs/na_papers");
            }}
          >
            Parliamentary Papers
          </Button>
          <Button
            endDecorator={<ChevronRightIcon />}
            style={{ borderRadius: 50, marginBottom: "21px" }}
            onClick={() => {
              navigate("/elibrary/docs/na_committee");
            }}
          >
            Committee
          </Button>
          <Button
            endDecorator={<ChevronRightIcon />}
            style={{ borderRadius: 50, marginBottom: "21px" }}
            onClick={() => {
              navigate("/elibrary/docs/na_budget");
            }}
          >
            Budget Statements
          </Button>
          <Button
            endDecorator={<ChevronRightIcon />}
            style={{ borderRadius: 50, marginBottom: "21px" }}
            onClick={() => {
              navigate("/elibrary/docs/sona");
            }}
          >
            SONA
          </Button>
          <Button
            endDecorator={<ChevronRightIcon />}
            style={{ borderRadius: 50, marginBottom: "21px" }}
            onClick={() => {
              navigate("/elibrary/docs/oop");
            }}
          >
            OOP
          </Button>
        </div>
      </div>

      <div className="account__header center-text u-margin-bottom-tiny" >
        <h3 style={{ fontWeight: "500" }}>National Council</h3>
      </div>

      <div className="center-hrz">
        <div className="column u-padding u-margin-bottom">
          <Button
            endDecorator={<ChevronRightIcon />}
            style={{ borderRadius: 50, marginBottom: "21px" }}
            onClick={() => {
              navigate("/elibrary/docs/nc_papers");
            }}
          >
            Parliamentary Papers
          </Button>
          <Button
            endDecorator={<ChevronRightIcon />}
            style={{ borderRadius: 50, marginBottom: "21px" }}
            onClick={() => {
              navigate("/elibrary/docs/nc_committee");
            }}
          >
            Committee
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ParlPapers;
