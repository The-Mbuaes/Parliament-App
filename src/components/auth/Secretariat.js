import { useCallback, useEffect, useState } from "react";
import Logo from "../../assets/home/logo@2x.png";
import { useNavigate, Navigate } from "react-router-dom";
import { db } from "../../firebase";
import { useAuth } from "../../context/AuthContext";
import { doc, setDoc } from "firebase/firestore";
import { connect } from "react-redux";
import { increment, setAuth } from "../../redux/actions";
import { ToastContainer } from "react-toastify";
import { throwToast } from "../../helpers/throwToast";
import "react-toastify/dist/ReactToastify.css";
import LoadingInButton from "../../animations/LoadingInButton";

const Secretariat = (props) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [authcode, setAuthcode] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (authcode != "245-189-144") {
      throwToast(
        "error",
        "Your authorization code is incorrect, you are not allowed to sign up as a Secretariat."
      );
      return;
    }
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
        phone,
        profilePic: "",
        type: "sec",
        type_full: "Secretariat",
      };

      //first arg -> document -(database, collection, documentID)
      //second arg -> document fields
      const userObjCreation = await setDoc(doc(db, "users", uid), userObj);
      await setDoc(doc(db, "favourites", uid), {
        elibrary: [],
        surveys: []
      })
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

  if (props.auth) {
    return <Navigate to="/account" />;
  }

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        height: "1390px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "12px",
        color: "#000",
        fontFamily: "Poppins",
      }}
      className="fadein"
    >
      <img
        style={{
          position: "absolute",
          top: "52px",
          left: "131px",
          width: "128px",
          height: "76px",
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
          fontSize: "16px",
          fontWeight: "500",
          textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
        }}
      >
        Parliament of Namibia
      </div>

      <form onSubmit={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: "158px",
            left: "47px",
            fontSize: "20px",
            fontWeight: "600",
            textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
          }}
        >
          Sign Up as a Secretariat
        </div>
        <div
          style={{
            position: "absolute",
            top: "390px",
            left: "30px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "331px",
            height: "68.81px",
            textAlign: "left",
          }}
        >
          <input
            style={{
              backgroundColor: "transparent",
              position: "absolute",
              top: "24px",
              left: "0px",
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
              top: "0px",
              left: "10px",
              fontWeight: "500",
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
            }}
          >
            Your Email Address
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "210px",
            left: "29px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "331px",
            height: "68.81px",
            textAlign: "left",
          }}
        >
          <input
            style={{
              position: "absolute",
              top: "24px",
              left: "0px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            type="text"
            id="fullName"
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
              top: "0px",
              left: "10px",
              fontWeight: "500",
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
            }}
          >
            Your Full Name
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: "300px",
            left: "29px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "331px",
            height: "68.81px",
            textAlign: "left",
          }}
        >
          <input
            style={{
              position: "absolute",
              top: "24px",
              left: "0px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            type="text"
            id="auth-code"
            placeholder="Authorization code"
            required
            value={authcode}
            onChange={(e) => {
              setAuthcode(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "10px",
              fontWeight: "500",
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
            }}
          >
            Enter Authorization Code
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "480px",
            left: "30px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "331px",
            height: "68.81px",
            textAlign: "left",
          }}
        >
          <input
            style={{
              position: "absolute",
              top: "24px",
              left: "0px",
              width: "331px",
              height: "44.81px",
            }}
            className="inputt"
            type="number"
            id="idnum"
            placeholder="ID number"
            required
            value={id}
            onChange={(e) => {
              setId(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "10px",
              fontWeight: "500",
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
            }}
          >
            Your ID Number
          </div>
        </div>
        <img
          style={{
            position: "absolute",
            height: "1.06%",
            width: "1.21%",
            top: "89.33%",
            right: "12.89%",
            bottom: "9.61%",
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
            top: "1050px",
            left: "28px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "331px",
            height: "44.81px",
            fontSize: "16px",
            color: "#fff",
          }}
        >
          <button
            id="sign-up"
            type="submit"
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
              <div
                style={{
                  position: "absolute",
                  top: "0px",
                  left: "0px",
                  borderRadius: "36px",
                  backgroundColor: "#1f6603",
                  boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
                  width: "331px",
                  height: "44.81px",
                }}
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
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
              pointerEvents: "none",
            }}
          >
            {isLoading ? (
              <LoadingInButton style={{ position: "absolute", top: "-20px" }} />
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
            boxShadow: "0px 0px 0px 2px rgba(255, 255, 255, 0.01)",
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
              boxShadow: "0px 0px 0px 2px rgba(255, 255, 255, 0.01)",
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
            top: "1122px",
            left: "116px",
            fontWeight: "500",
            textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
          }}
        >
          Already have an account?
        </div>
        <div
          style={{
            position: "absolute",
            top: "1155px",
            left: "138px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "115px",
            height: "44.81px",
            cursor: "pointer",
            fontSize: "16px",
          }}
          onClick={()=>{navigate("/login")}}
        >
          <button
            id="login"
            type="button"
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
                  boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
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
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
            }}
          >
            Log in
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "960px",
            left: "30px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "331px",
            height: "68.81px",
            textAlign: "left",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "10px",
              fontWeight: "500",
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
            }}
          >
            Confirm Your Password
          </div>
          <div
            style={{
              position: "absolute",
              top: "24px",
              left: "0px",
              boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
              width: "331px",
              height: "44.81px",
            }}
          >
            <input
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "331px",
                height: "44.81px",
              }}
              id="confirm-password"
              placeholder="Confirm Password"
              className="inputt"
              type="password"
              required
              value={confirm}
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "870px",
            left: "30px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "331px",
            height: "68.81px",
            textAlign: "left",
            color: "#898989",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "10px",
              fontWeight: "500",
              color: "#000",
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
            }}
          >
            Create a Password
          </div>

          <input
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "331px",
              height: "44.81px",
            }}
            type="password"
            className="inputt"
            id="password"
            placeholder="Minimum 8 Characters"
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <div
          style={{
            position: "absolute",
            top: "570px",
            left: "30px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "331px",
            height: "128.81px",
            textAlign: "left",
          }}
        >
          <input
            style={{
              position: "absolute",
              top: "24px",
              left: "0px",
              width: "331px",
              height: "44.81px",
            }}
            type="number"
            id="phone"
            className="inputt"
            placeholder="0812345678"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "10px",
              fontWeight: "500",
              textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
            }}
          >
            Your Phone Number
          </div>

          <div
            style={{
              position: "absolute",
              top: "84px",
              left: "0px",
              boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
              width: "228px",
              height: "44.81px",
              cursor: "pointer",
              textAlign: "center",
              fontSize: "16px",
            }}
          >
            <button
              type="button"
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
                    boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
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
                width: "185px",
                height: "26px",
                textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
              }}
            >
              Send Verification Code
            </div>
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "720px",
            left: "30px",
            boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
            width: "333px",
            height: "128.81px",
            textAlign: "left",
          }}
        >
          <input
            style={{
              position: "absolute",
              top: "24px",
              left: "0px",
              width: "331px",
              height: "44.81px",
            }}
            type="number"
            id="verify"
            className="inputt"
            placeholder="Your Verification Code"
          />
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "10px",
              fontWeight: "500",
            }}
          >
            We Sent You a Verification Code, Please Enter it Below
          </div>

          <div
            style={{
              position: "absolute",
              top: "84px",
              left: "0px",
              boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
              width: "228px",
              height: "44.81px",
              cursor: "pointer",
              fontSize: "16px",
            }}
          >
            <button
              type="button"
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
                    boxShadow: "0px 0px 0px 4px rgba(255, 255, 255, 0.01)",
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
                textShadow: "0px 0px 0px rgba(255, 255, 255, 0.01)",
              }}
            >
              Confirm Phone Number
            </div>
          </div>
        </div>
      </form>
      <ToastContainer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Secretariat);
