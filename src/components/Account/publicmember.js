import { useCallback } from "react";
import Pencil from "../../assets/home/-icon-pencil.svg"

const AccountPagePublicMember = () => {
  const onGroupContainer2Click = useCallback(() => {
    // Please sync "National Council Member Terms" to the project
  }, []);

  return (
    <div
      style={{
        position: "relative",
        backgroundColor: "#fff",
        width: "100%",
        height: "995px",
        overflow: "hidden",
        textAlign: "left",
        fontSize: "20px",
        color: "#000",
        fontFamily: "Poppins",
      }}
    >
      <div
        style={{
          width: "270px",
          height: "99px",
          fontSize: "18px",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "17px",
            left: "121px",
            fontWeight: "600",
            display: "inline-block",
            width: "149px",
            height: "28px",
          }}
        >
          Douglas Masho
        </div>
        <div
        className="account__pic"
          style={{
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "99px",
            height: "99px",
            objectFit: "cover",
          }}
          alt=""
          src="/ellipse-1@2x.png"
        ></div>
        <div
          style={{
            position: "absolute",
            top: "50px",
            left: "118px",
            width: "118px",
            height: "31px",
            cursor: "pointer",
          }}
          onClick={onGroupContainer2Click}
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
              width: "118px",
              height: "31px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "0px",
                left: "0px",
                width: "118px",
                height: "31px",
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
                  width: "118px",
                  height: "31px",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "7px",
                  left: "37px",
                  fontSize: "12px",
                  fontFamily: "Poppins",
                  color: "#fff",
                  textAlign: "left",
                  display: "inline-block",
                  width: "72px",
                  height: "16px",
                }}
              >
                Edit Profile
              </div>
            </div>
            <img
              style={{
                position: "absolute",
                height: "47.23%",
                width: "12.4%",
                top: "29.04%",
                right: "75.73%",
                bottom: "23.74%",
                left: "11.86%",
                maxWidth: "100%",
                overflow: "hidden",
                maxHeight: "100%",
              }}
              alt=""
              src={Pencil}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AccountPagePublicMember;
