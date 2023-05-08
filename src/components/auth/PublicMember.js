import { useState, useCallback, useEffect } from "react";
import IPhone142 from "./IPhone142";
import PortalPopup from "./PortalPopup";
import { useNavigate, Navigate } from "react-router-dom";
import Logo from "../../assets/home/logo@2x.png";
import { ToastContainer } from "react-toastify";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { connect } from "react-redux";
import { increment, setAuth } from "../../redux/actions";
import { throwToast } from "../../helpers/throwToast";
import "react-toastify/dist/ReactToastify.css";
import LoadingInButton from "../../animations/LoadingInButton";

const PublicMember = (props) => {


  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [constituency, setConstituency] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { register } = useAuth();

  const [isIPhone142Open, setIPhone142Open] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 8) {
      throwToast("warning", "Password must be at least 8 characters long");
      return;
    }
    if (password !== confirm) {
      throwToast("warning", "Passwords do not match.");
      return;
    }

    try {
      setIsLoading(true);
      const userCred = await register(email, password);
      const uid = userCred.user.uid;
      const userObj = {
        uid,
        fullName,
        email,
        id,
        constituency,
        phone,
        profilePic: "",
        type: "p_mem",
        type_full: "Public Member",
      };

      const userObjCreation = await setDoc(doc(db, "users", uid), userObj);
      props.setAuth(userObj);
      throwToast("success", "Account Successfully Created");
      navigate("/account");
    } catch (e) {
      console.log(e);
      throwToast("error", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  const openIPhone142 = useCallback(() => {
    setIPhone142Open(true);
  }, []);

  const closeIPhone142 = useCallback(() => {
    setIPhone142Open(false);
  }, []);


  if(props.auth){
    return <Navigate to="/account"/>
  }

  return (
    <>
      <div
        style={{
          position: "relative",
          backgroundColor: "#fff",
          width: "100%",
          height: "1350px",
          overflow: "hidden",
          textAlign: "center",
          fontSize: "16px",
          color: "#000",
          fontFamily: "Poppins",
        }}
      >
        <img
          style={{
            position: "absolute",
            top: "56px",
            left: "135px",
            width: "120px",
            height: "68px",
            objectFit: "cover",
          }}
          alt=""
          src={Logo}
        />
        <div
          style={{
            position: "absolute",
            top: "132px",
            left: "104px",
            fontWeight: "500",
          }}
        >
          Parliament of Namibia
        </div>
        <div
          style={{
            position: "absolute",
            top: "132px",
            left: "104px",
            fontWeight: "500",
          }}
        >
          Parliament of Namibia
        </div>

        <div
          style={{
            position: "absolute",
            top: "160px",
            left: "54px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Sign Up as a Public Member
        </div>

        <form onSubmit={handleSubmit}>
          <input
            style={{
              position: "absolute",
              top: "324px",
              left: "30px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            id="email"
            type="email"
            placeholder="example@email.com"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "300px",
              left: "40px",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Your Email Address
          </div>

          <input
            style={{
              position: "absolute",
              top: "246px",
              left: "30px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            id="fullName"
            type="text"
            placeholder="First and Last Name"
            required
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "220px",
              left: "40px",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Your Full Name
          </div>
          <div
            style={{
              position: "absolute",
              top: "509px",
              left: "30px",
              width: "331px",
              height: "44.81px",
            }}
          >
            <input
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                borderRadius: "36px",
                boxSizing: "border-box",
                width: "331px",
                height: "44.81px",
              }}
              type="text"
              className="inputt"
              id="constituency"
              placeholder="Constituency Name"
              value={constituency}
              onChange={(e) => {
                setConstituency(e.target.value);
              }}
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "656px",
              left: "30px",
              width: "331px",
              height: "44.81px",
            }}
          >
            <input
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                boxSizing: "border-box",
                width: "331px",
                height: "44.81px",
              }}
              className="inputt"
              id="phone"
              type="number"
              placeholder="0812345678"
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
          <input
            style={{
              position: "absolute",
              top: "414px",
              left: "30px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            id="idnum"
            type="number"
            placeholder="ID Number"
            required
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "390px",
              left: "40px",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Your ID Number
          </div>
          <div
            style={{
              position: "absolute",
              top: "390px",
              left: "40px",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Your ID Number
          </div>
          <div
            style={{
              position: "absolute",
              top: "480px",
              left: "40px",
              width: "246px",
              height: "18px",
              textAlign: "left",
              fontSize: "12px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                fontWeight: "500",
              }}
            >
              Your Constituency (tap select to search)
            </div>
          </div>
          <img
            style={{
              position: "absolute",
              height: "1.06%",
              width: "1.21%",
              top: "98.86%",
              right: "12.89%",
              bottom: "0.08%",
              left: "85.9%",
              maxWidth: "100%",
              overflow: "hidden",
              maxHeight: "100%",
            }}
            alt=""
            src="/vector.svg"
          />
          <div
            style={{
              position: "absolute",
              top: "1124px",
              left: "28px",
              width: "331px",
              height: "44.81px",
              color: "#fff",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: "0",
                backgroundColor: "transparent",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "331px",
                height: "44.81px",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "331px",
                  height: "44.81px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "#1f6603",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "36px",
                    width: "331px",
                    height: "44.81px",
                  }}
                  type="submit"
                />
              </div>
            </button>
            <div
              style={{
                position: "absolute",
                top: "9px",
                left: "109px",
                display: "inline-block",
                width: "114.03px",
                height: "26.23px",
                pointerEvents: "none",
              }}
            >
              {isLoading ? (
                <LoadingInButton
                  style={{ position: "absolute", top: "-20px" }}
                />
              ) : (
                "Sign Up"
              )}
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "47px",
              left: "32px",
              width: "25px",
              height: "23px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                backgroundColor: "#fff",
                width: "25px",
                height: "23px",
              }}
            />
            <img
              style={{
                position: "absolute",
                top: "3px",
                left: "6px",
                width: "10.37px",
                height: "18px",
              }}
              alt=""
              src="/-icon-chevron-left.svg"
            />
          </div>
          <div
            style={{
              position: "absolute",
              top: "1196px",
              left: "116px",
              fontSize: "12px",
              fontWeight: "500",
            }}
          >
            Already have an account?
          </div>
          <div
            style={{
              position: "absolute",
              top: "1229px",
              left: "138px",
              width: "115px",
              height: "44.81px",
              cursor: "pointer",
            }}
            onClick={()=>{navigate("/login")}}
          >
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: "0",
                backgroundColor: "transparent",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "115px",
                height: "44.81px",
              }}
              type="button"
            onClick={()=>{navigate("/login")}}
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "115px",
                  height: "44.81px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "36px",
                    backgroundColor: "#dcc091",
                    width: "115px",
                    height: "44.81px",
                  }}
                />
              </div>
            </button>
            <div
              style={{
                position: "absolute",
                top: "9px",
                left: "27px",
                display: "inline-block",
                width: "60px",
                height: "26px",
              }}
            >
              Log in
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "1034px",
              left: "40px",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Confirm Your Password
          </div>
          <input
            style={{
              position: "absolute",
              top: "1058px",
              left: "30px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            id="confirm-password"
            type="password"
            placeholder="Confirm Password"
            required
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "944px",
              left: "40px",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Create a Password
          </div>
          <div
            style={{
              position: "absolute",
              top: "636px",
              left: "37px",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            Your Phone Number
          </div>
          <div
            style={{
              position: "absolute",
              top: "720px",
              left: "27px",
              width: "228px",
              height: "44.81px",
              cursor: "pointer",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: "0",
                backgroundColor: "transparent",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "228px",
                height: "44.81px",
              }}
              type="button"
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "228px",
                  height: "44.81px",
                }}
              >
                <button
                  style={{
                    cursor: "pointer",
                    border: "none",
                    padding: "0",
                    backgroundColor: "#dcc091",
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "36px",
                    width: "228px",
                    height: "44.81px",
                  }}
                  type="button"
                />
              </div>
            </button>
            <div
              style={{
                position: "absolute",
                top: "9px",
                left: "21px",
                display: "inline-block",
                width: "185px",
                height: "26px",
              }}
            >
              Send Verification Code
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "791px",
              left: "37px",
              fontSize: "12px",
              fontWeight: "500",
              textAlign: "left",
            }}
          >
            We Sent You a Verification Code, Please Enter it Below
          </div>
          <div
            style={{
              position: "absolute",
              top: "875px",
              left: "27px",
              width: "228px",
              height: "44.81px",
              cursor: "pointer",
              textAlign: "left",
            }}
          >
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: "0",
                backgroundColor: "transparent",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "228px",
                height: "44.81px",
              }}
              type="button"
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "228px",
                  height: "44.81px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "36px",
                    backgroundColor: "#dcc091",
                    width: "228px",
                    height: "44.81px",
                  }}
                />
              </div>
            </button>
            <div
              style={{
                position: "absolute",
                top: "9px",
                left: "21px",
                display: "inline-block",
                width: "207px",
                height: "26px",
              }}
            >
              Confirm Phone Number
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "570px",
              left: "30px",
              width: "105px",
              height: "44.81px",
              cursor: "pointer",
            }}
            onClick={openIPhone142}
          >
            <button
              style={{
                cursor: "pointer",
                border: "none",
                padding: "0",
                backgroundColor: "transparent",
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "105px",
                height: "44.81px",
              }}
              type="button"
            >
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  width: "105px",
                  height: "44.81px",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    borderRadius: "36px",
                    backgroundColor: "#dcc091",
                    width: "105px",
                    height: "44.81px",
                  }}
                />
              </div>
            </button>
            <div
              style={{
                position: "absolute",
                top: "9px",
                left: "15px",
                display: "inline-block",
                width: "75px",
                height: "26px",
              }}
            >
              Search
            </div>
          </div>
          <input
            style={{
              position: "absolute",
              top: "820px",
              left: "30px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            id="verify"
            type="text"
            placeholder="Verification Code"
          />
          <input
            style={{
              position: "absolute",
              top: "973px",
              left: "30px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            id="password"
            type="password"
            placeholder="Mimimum 8 Characters"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "784px",
              left: "38px",
              backgroundColor: "rgba(217, 217, 217, 0)",
              width: "83px",
              height: "40px",
            }}
          />
        </form>
      </div>
      {isIPhone142Open && (
        <PortalPopup
          overlayColor="rgba(113, 113, 113, 0.3)"
          placement="Centered"
          onOutsideClick={closeIPhone142}
        >
          <IPhone142 onClose={closeIPhone142} />
        </PortalPopup>
      )}
      <ToastContainer />
    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(PublicMember);
