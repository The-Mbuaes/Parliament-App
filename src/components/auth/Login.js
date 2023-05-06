import { useCallback, useState } from "react";
import Logo from "../../assets/home/logo@2x.png";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";
import { useAuth } from "../../context/AuthContext";
import { connect } from "react-redux";
import { setAuth } from "../../redux/actions";
import { ToastContainer } from "react-toastify";
import { throwToast } from "../../helpers/throwToast";
import "react-toastify/dist/ReactToastify.css";
import LoadingInButton from "../../animations/LoadingInButton";

const LogIn = (props) => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      const userCred = await login(email, password);
      //get userObj
      const docRef = doc(db, "users", userCred.user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        props.setAuth(docSnap.data());
      } else {
        console.log("No such document!");
      }

      throwToast("success", "Login Successful");
      navigate("/account");
    } catch (e) {
      console.log(e);
      throwToast("error", e.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        height: "844px",
        overflow: "hidden",
        textAlign: "center",
        fontSize: "12px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <form onSubmit={handleSubmit}>
        <div
          style={{
            position: "absolute",
            top: "414px",
            left: "30px",
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
              type="password"
              className="inputt"
              id="password"
              placeholder="Your Password"
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
        </div>
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
            fontSize: "16px",
            fontWeight: "500",
          }}
        >
          Parliament of Namibia
        </div>
        <div
          style={{
            position: "absolute",
            top: "228px",
            left: "164px",
            fontSize: "20px",
            fontWeight: "600",
            pointerEvents: "none",
          }}
        >
          Log In
        </div>
        <div
          style={{
            position: "absolute",
            top: "324px",
            left: "30px",
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
              className="inputt"
              id="email"
              type="email"
              placeholder="Email Address"
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            top: "300px",
            left: "40px",
            fontWeight: "500",
            textAlign: "left",
          }}
        >
          Email Address or Phone Number
        </div>
        <div
          style={{
            position: "absolute",
            top: "390px",
            left: "40px",
            width: "59px",
            height: "18px",
            textAlign: "left",
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
            Password
          </div>
        </div>
        <div
          style={{
            cursor: "pointer",
            border: "none",
            padding: "0",
            backgroundColor: "transparent",
            position: "absolute",
            top: "486px",
            left: "29px",
            width: "331px",
            height: "44.81px",
          }}
          type="submit"
        >
          <div
            style={{
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "331px",
              height: "44.81px",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "331px",
                height: "44.81px",
                cursor: "pointer",
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
              />
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "109px",
              fontSize: "16px",
              fontFamily: "Poppins",
              color: "#fff",
              textAlign: "center",
              display: "inline-block",
              width: "114.03px",
              height: "26.23px",
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
            top: "562px",
            left: "116px",
            fontWeight: "500",
          }}
        >
          Don’t have an account?
        </div>
        <div
          style={{
            position: "absolute",
            top: "595px",
            left: "131px",
            width: "115px",
            height: "44.81px",
            cursor: "pointer",
            fontSize: "16px",
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
          </div>
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "8px",
              display: "inline-block",
              width: "98px",
              height: "26px",
            }}
          >
            Sign Up
          </div>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  //this is the state in the store ///this will take the state from the store and put it as props in the component that is being connected
  auth: state.auth,
});

const mapDispatchToProps = (dispatch) => {
  //this will allow you to dispatch actions from anywhere in the compoonent
  return {
    setAuth: (user) => dispatch(setAuth(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
