import { useCallback } from "react";
import Logo from "../../assets/home/logo@2x.png";
import { useNavigate } from "react-router-dom";

const Secretariat = () => {
  const navigate = useNavigate();
  const onGroupButtonClick = useCallback(() => {
    //sign up here
    // Please sync "Home (1)" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Account (Not Signed In)" to the project
  }, []);

  const onGroupContainer7Click = useCallback(() => {
    // Please sync "Log in" to the project
    navigate("/login")
  }, []);

  const onGroupContainer16Click = useCallback(() => {
    // Please sync "Log in" to the project
  }, []);

  const onGroupContainer21Click = useCallback(() => {
    // Please sync "Log in" to the project
  }, []);

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
      <div
        style={{
          position: "absolute",
          top: "228px",
          left: "77px",
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
          onClick={onGroupButtonClick}
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
            pointerEvents: "none"
          }}
          
        >
          Sign Up
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
        onClick={onGroupContainer5Click}
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
        onClick={onGroupContainer7Click}
      >
        <button
        id="login"
        
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
          onClick={onGroupContainer16Click}
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
          onClick={onGroupContainer21Click}
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
    </div>
  );
};

export default Secretariat;