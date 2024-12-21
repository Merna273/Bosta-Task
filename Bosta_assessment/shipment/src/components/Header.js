// import { useState } from "react";
// import React from "react";
// import { AppBar, Toolbar, Typography, Button } from "@mui/material";
// import logo from "../logo.svg";
// import logoAr from "../logoAr.svg";
// import { useTranslation } from "react-i18next";
// import i18next from "i18next";
// import SearchIcon from "@mui/icons-material/Search";
// import SearchBar from "./search_field";
// import Search from "./shipment_search";
// import DataShowing from "./dataShowing";
// import "./Header.css";

// function Header() {
//   const { i18n } = useTranslation();
//   const [searchVisible, setSearchVisible] = useState(false);
//   const [searchResponse, setSearchResponse] = useState(null); // State to store the response

//   const handleChangeLanguage = (lang) => {
//     i18next.changeLanguage(lang);
//   };

//   const toggleSearch = () => {
//     setSearchVisible(!searchVisible);
//   };

//   const currentLanguage = i18n.language;

//   // Function to handle response from SearchBar
//   const handleSearchResponse = (response) => {
//     setSearchResponse(response);
//     console.log("Response received in Header:", response);
//   };

//   return (
//     <>
//       <AppBar
//         position="sticky" // Change this to sticky
//         sx={{
//           bgcolor: "#f3fafb",
//           padding: "1rem",
//           boxShadow: "none",
//           direction: currentLanguage === "ar" ? "rtl" : "ltr",
//           top: 0, // Ensure it's fixed at the top of the screen
//           zIndex: 1300, // Add a higher z-index if necessary to ensure it's above other elements
//         }}
//       >
//         <Toolbar>
//           <img
//             src={currentLanguage === "ar" ? logoAr : logo}
//             alt="logo"
//             className="logo"
//             style={{
//               // width: "7%",
//               // height: "7%",
//               marginLeft: currentLanguage === "ar" ? "1rem" : "0",
//               marginRight: currentLanguage === "ar" ? "0" : "1rem",
//             }}
//           />
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
//           <Button
//             onClick={() =>
//               handleChangeLanguage(currentLanguage === "en" ? "ar" : "en")
//             }
//             sx={{
//               backgroundColor: "transparent",
//               color: "gray",
//               border: "none",
//               padding: 0,
//               textTransform: "none",
//               fontSize: "1rem",
//               fontWeight: "bold",
//             }}
//           >
//             {currentLanguage === "en" ? "العربية" : "English"}
//           </Button>
//           <SearchIcon
//             onClick={toggleSearch}
//             sx={{
//               display: { xs: "block", sm: "none" },
//               color: "gray",
//               fontSize: "2rem",
//               marginLeft: "1rem",
//             }}
//           />
//         </Toolbar>
//       </AppBar>

//       {searchVisible && (
//         <div
//           style={{
//             position: "absolute",
//             top: "60px",
//             left: "15%",
//             right: "0",
//             width: "80%",
//             backgroundColor: "#fff",
//             padding: "1rem",
//             boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//           }}
//         >
//           <SearchBar
//             currentLanguage={currentLanguage}
//             source={2}
//             onSearchComplete={handleSearchResponse} // Pass the callback
//           />
//         </div>
//       )}
//       <Search />
//       <DataShowing response={searchResponse} />
//     </>
//   );
// }

// export default Header;
import { useState } from "react";
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  useMediaQuery,
} from "@mui/material";
import logo from "../logo.svg";
import logoAr from "../logoAr.svg";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "./search_field";
import Search from "./shipment_search";
import DataShowing from "./dataShowing";
import "./Header.css";

function Header() {
  const { i18n } = useTranslation();
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchResponse, setSearchResponse] = useState(null); // State to store the response

  const currentLanguage = i18n.language;

  const handleChangeLanguage = (lang) => {
    i18next.changeLanguage(lang);
  };

  const toggleSearch = () => {
    setSearchVisible(!searchVisible);
  };

  // Function to handle response from SearchBar
  const handleSearchResponse = (response) => {
    setSearchResponse(response);
    console.log("Response received in Header:", response);
  };

  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          bgcolor: "#f3fafb",
          padding: "1rem",
          boxShadow: "none",
          direction: currentLanguage === "ar" ? "rtl" : "ltr",
          top: 0,
          zIndex: 1300,
        }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <img
            src={currentLanguage === "ar" ? logoAr : logo}
            alt="logo"
            className="logo"
            style={{
              marginLeft: currentLanguage === "ar" ? "1rem" : "0",
              marginRight: currentLanguage === "ar" ? "0" : "1rem",
            }}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
          <Button
            onClick={() =>
              handleChangeLanguage(currentLanguage === "en" ? "ar" : "en")
            }
            sx={{
              backgroundColor: "transparent",
              color: "gray",
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: "bold",
            }}
          >
            {currentLanguage === "en" ? "العربية" : "English"}
          </Button>
          <SearchIcon
            onClick={toggleSearch}
            sx={{
              display: { xs: "block", sm: "none" },
              color: "gray",
              fontSize: "2rem",
              marginLeft: "1rem",
              cursor: "pointer",
            }}
          />
        </Toolbar>
      </AppBar>

      {searchVisible && (
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "10%",
            right: "10%",
            width: "80%",
            backgroundColor: "#fff",
            padding: "1rem",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <SearchBar
            currentLanguage={currentLanguage}
            source={2}
            onSearchComplete={handleSearchResponse}
          />
        </div>
      )}
      <Search />
      <DataShowing response={searchResponse} />
    </>
  );
}

export default Header;
