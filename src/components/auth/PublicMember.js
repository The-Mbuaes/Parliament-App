import { useState, useCallback } from "react";
import IPhone142 from "./IPhone142";
import PortalPopup from "./PortalPopup";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/home/logo@2x.png";


const PublicMember = () => {
  const navigate = useNavigate()
  const [isIPhone142Open, setIPhone142Open] = useState(false);

  const onGroupButtonClick = useCallback(() => {
    //sign up here
    console.log("Alright")
    // Please sync "Home (1)" to the project
  }, []);

  const onGroupContainer5Click = useCallback(() => {
    // Please sync "Account (Not Signed In)" to the project
  }, []);

  const onGroupContainer7Click = useCallback(() => {
    navigate("/login")
    // Please sync "Log in" to the project
  }, []);

  const onGroupContainer9Click = useCallback(() => {
    // Please sync "Log in" to the project
  }, []);

  const onGroupContainer11Click = useCallback(() => {
    // Please sync "Log in" to the project
  }, []);

  const openIPhone142 = useCallback(() => {
    setIPhone142Open(true);
  }, []);

  const closeIPhone142 = useCallback(() => {
    setIPhone142Open(false);
  }, []);

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
            top: "228px",
            left: "54px",
            fontSize: "20px",
            fontWeight: "600",
          }}
        >
          Sign Up as a Public Member
        </div>
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
            id="number"
            type="number"
            placeholder="0812345678"
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
          </button>
          <div
            style={{
              position: "absolute",
              top: "9px",
              left: "109px",
              display: "inline-block",
              width: "114.03px",
              height: "26.23px",
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
          onClick={onGroupContainer7Click}
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
          onClick={onGroupContainer9Click}
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
          onClick={onGroupContainer11Click}
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
    </>
  );
};

export default PublicMember;
