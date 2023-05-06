import { useCallback } from "react";
import Pencil from "../../assets/home/-icon-pencil.svg";
import { connect } from "react-redux";
import { increment, setAuth } from "../../redux/actions";
import Button from '@mui/joy/Button';
import CancelIcon from '@mui/icons-material/Cancel';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import {useAuth} from "../../context/AuthContext";
import {auth} from "../../firebase";
import { signOut } from 'firebase/auth';

const AccountPagePublicMember = (props) => {

  return (
    <div className="fadein">
      <div className="roww u-margin-bottom-small u-margin-top" style={{justifyContent: "space-around"}}>
      <div className="account__pic" alt="Profile picture" src="/ellipse-1@2x.png"></div>
      <div className="column">
        <h2 className="header-text u-margin-bottom-small">Douglas  Masho</h2>
        <div className="roww" style={{justifyContent: "space-between"}}>
        <Button startDecorator={<ModeEditIcon />} style={{ borderRadius: 50, marginRight: "10px" }} onClick={()=>{}}>Edit Profile</Button> <br/>
        <Button startDecorator={<CancelIcon />} style={{ borderRadius: 50 }} onClick={()=>{signOut(auth); props.setAuth(null)}} color="danger" variant="soft">Sign Out</Button> <br/>
        </div>
      </div>
      
      </div>

      <div className="center-hrz">
      <div className="account__header">
        <h3 style={{fontWeight: "500"}}>Account Details</h3>
      </div>
      </div>
      <div style={{padding: "12px"}}>
      <div className="account__detail">
        Name: Douglas Masho
      </div>
      <div className="account__detail">
        Account Type: Public Member
      </div>
      <div className="account__detail">
        ID Number: 12812678
      </div>
      <div className="account__detail">
      Phone Number: 0819032891
      </div>
      <div className="account__detail">
      Constituency: Windhoek
      </div>
      </div>
      
      
      
    
     
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  count: state.count,
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  //this will allow you to dispatch actions from anywhere in the compoonent
  return {
    increment: (num) => dispatch(increment(num)),
    setAuth: (user) => dispatch(setAuth(user)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AccountPagePublicMember);
