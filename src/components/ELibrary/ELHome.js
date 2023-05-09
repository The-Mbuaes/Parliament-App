import Logo from "../../assets/home/logo@2x.png";
import Button from "@mui/joy/Button/Button";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useNavigate } from "react-router-dom";
const ELHome = () => {
    const navigate = useNavigate();
  return (
    <div className="pagepadding fadein">
      <div className="center-hrz--col center-text u-margin-bottom">
        <img src={Logo} alt="logo" className="page__logo" />
        <h2 className="page__header">Parliament Of Namibia</h2>
      </div>

      <div className="center-text u-margin-bottom-small">
        <h2>E-Library</h2>
      </div>

      <div className="center-hrz">
      <div className="column u-padding">
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {
            navigate("/elibrary/parlpapers")
          }}
        >
          Parliamentary Papers
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {
            navigate("/elibrary/docs/bills");
          }}
        >
          Bills
        </Button>
        <Button
          endDecorator={<ChevronRightIcon />}
          style={{ borderRadius: 50, marginBottom: "21px" }}
          onClick={() => {
            navigate("/elibrary/docs/acts");
          }}
        >
          Acts of Parliament
        </Button>
      </div>
      </div>

    </div>
  );
};

export default ELHome;
