import { useCallback } from "react";
import Logo from "../../assets/home/logo@2x.png";
import { useNavigate } from "react-router-dom";


const LogIn = () => {
    const navigate = useNavigate();
  const onGroupContainer6Click = useCallback(() => {
    // Please sync "Home (1)" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Home (1)" to the project
  }, []);

  const onGroupContainer9Click = useCallback(() => {
    navigate("/signup");
    // Please sync "Public Member" to the project
  }, []);

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
      <button
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
          onClick={onGroupContainer6Click}
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
            onClick={onGroupContainer5Click}
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
          }}
        >
          Log In
        </div>
      </button>
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
        onClick={onGroupContainer9Click}
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
    </div>
  );
};

export default LogIn;
