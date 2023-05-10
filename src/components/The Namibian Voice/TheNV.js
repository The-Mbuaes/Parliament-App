import Logo from "../../assets/namibian_voice.png";
import Button from "@mui/joy/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";

const TheNV = () => {
  const navigate = useNavigate();
  return (
    <div className="fadein pagepadding">
      <div className="center-hrz u-margin-bottom u-padding" style={{paddingTop: "20px"}}>
        <img src={Logo} alt="The Namibian Voice" className="img_nv" />
      </div>
      
      <div className="center-hrz">
      <div className="column u-padding">
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          Opinions
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          Issues
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {
            navigate("/surveys");
          }}
        >
          Surveys
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {}}
        >
          Petitions
        </Button>

        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {
            window.location.replace(
              "http://www.lac.org.na/index.php/laws/constitution"
            );
          }}
          sx={{ color: "black" }}
          color="neutral"
        >
          Constitution of Namibia
        </Button>

        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {
            window.location.replace(
              "https://www.parliament.na/acts-of-parliament/"
            );
          }}
          sx={{ color: "black" }}
          color="neutral"
        >
          Acts of Parliament
        </Button>
      </div>
      </div>

    </div>
  );
};

export default TheNV;
