import React, { useState } from "react";
import SignUp from "./components/auth/SignUp";
import { extendTheme, CssVarsProvider } from "@mui/joy/styles";
import {  Route, Routes , useNavigate} from "react-router-dom";
import Home from "./components/Home";
import { BottomNavigation } from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AccountNull from "./components/auth/Accountnull";
import Parliamentarian from "./components/auth/Parliamentarian";
import Secretariat from "./components/auth/Secretariat";
import PublicMember from "./components/auth/PublicMember";
import LogIn from "./components/auth/Login";
import AuthContextProvider from "./context/AuthContext";
import Accountroot from "./components/Account/accountroot";
import CreatePoll from "./components/Polls/CreatePoll";
import AllPolls from "./components/Polls/AllPolls";
import PSU from "./components/auth/PSU";
import TheNV from "./components/The Namibian Voice/TheNV";
import Createdoc from "./components/ELibrary/Createdoc";
import Editdoc from "./components/ELibrary/Editdoc";


const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        mode: "light",
        primary: {
          50: "#1F6603",
          100: "#1F6603",
          200: "#1F6603",
          300: "#1F6603",
          400: "#1F6603",
          500: "#1F6603",
          600: "#1F6603",
          700: "#1F6603",
          800: "#1F6603",
          900: "#1F6603",
          solidActiveBg: "#DCC091"
        },
        neutral: {
          50: "#DCC091",
          100: "#DCC091",
          200: "#DCC091",
          300: "#DCC091",
          400: "#DCC091",
          500: "#DCC091",
          600: "#DCC091",
          700: "#DCC091",
          800: "#DCC091",
          900: "#DCC091",
          solidActiveBg: "#DCC091"
        },

        secondary: {
          50: "#DCC091",
          100: "#DCC091",
          200: "#DCC091",
          300: "#DCC091",
          400: "#DCC091",
          500: "#DCC091",
          600: "#DCC091",
          700: "#DCC091",
          800: "#DCC091",
          900: "#DCC091",
          solidActiveBg: "#DCC091"
        }
      },
    },
    dark: {
      palette: {
        mode: "light",
        primary: {
          50: "#1F6603",
          100: "#1F6603",
          200: "#1F6603",
          300: "#1F6603",
          400: "#1F6603",
          500: "#1F6603",
          600: "#1F6603",
          700: "#1F6603",
          800: "#1F6603",
          900: "#1F6603",
          solidActiveBg: "#1F6603"
        },
        neutral: {
          50: "#DCC091",
          100: "#DCC091",
          200: "#DCC091",
          300: "#DCC091",
          400: "#DCC091",
          500: "#DCC091",
          600: "#DCC091",
          700: "#DCC091",
          800: "#DCC091",
          900: "#DCC091",
          solidActiveBg: "#DCC091"
        },

        secondary: {
          50: "#DCC091",
          100: "#DCC091",
          200: "#DCC091",
          300: "#DCC091",
          400: "#DCC091",
          500: "#DCC091",
          600: "#DCC091",
          700: "#DCC091",
          800: "#DCC091",
          900: "#DCC091",
          solidActiveBg: "#DCC091"
        }
        
      },
    },
  },
  fontFamily: {
    body: "Poppins, Sans-serrif",
    display: "Poppins, Sans-serrif",
    code: "Poppins, Sans-serrif",
    fallback: "Poppins, Sans-serrif",
  }
});

// const newTheme = createTheme({
//   palette: {
//     primary: {
//       main: "#1F6603",
//     },
//     secondary: {
//       main: "#DCC091",
//     },
//   },
// });

function App() {
  const [value, setValue] = useState(1);
  const navigate = useNavigate();
  return (
    <AuthContextProvider>
      <CssVarsProvider theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route exact path="/auth" element={<AccountNull />} />
          <Route path="/signup/parliamentarian" element={<Parliamentarian/>} />
          <Route path="/signup/secretariat" element={<Secretariat/>} />
          <Route path="/signup/publicmember" element={<PublicMember/>} />
          <Route path="/login" element={<LogIn/>} />
          <Route path="/account" element={<Accountroot/>} />
          <Route path="/createpoll" element={<CreatePoll/>} />
          <Route path="/surveys" element={<AllPolls/>} />
          <Route path="/thenamibianvoice" element={<TheNV/>} />
          <Route path="/createdoc" element={<Createdoc/>} />
          <Route path="/editdoc/:docid" element={<Editdoc/>} />
          <Route path="/psu">
          <Route path=":type" element={<PSU/>} />
          </Route>
        </Routes>
      </CssVarsProvider>

        <BottomNavigation
          showLabel
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
          sx={{
            width: "100%",
            position: "fixed",
            bottom: 0,
            bgcolor: "white",
            "& .Mui-selected": {
              "& .MuiBottomNavigationAction-label": {
                fontSize: (theme) => theme.typography.caption,
                transition: "none",
                fontWeight: "bold",
                lineHeight: "20px",
              },
              "& .MuiSvgIcon-root, & .MuiBottomNavigationAction-label": {
                color: "#1F6603"
              },
            },
          }}
        >
          <BottomNavigationAction label="Account" icon={<AccountCircleOutlinedIcon />} onClick={()=>{navigate("/account")}}/>
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} onClick={()=>{navigate("/")}}/>
          <BottomNavigationAction label="Favorites" icon={<StarBorderIcon />} onClick={()=>{navigate("/favorites")}}/>
        </BottomNavigation>
    </AuthContextProvider>
  );
}

export default App;


