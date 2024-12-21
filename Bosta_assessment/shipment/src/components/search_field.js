// import React, { useState } from "react";
// import { TextField, Button } from "@mui/material";
// import { useTranslation } from "react-i18next";
// import SearchIcon from "@mui/icons-material/Search";

// function SearchBar({ currentLanguage, source, onSearchComplete }) {
//   const { t } = useTranslation("global");
//   const [trackingNo, setTrackingNo] = useState("");
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   console.log("Source:", source);

//   const handleTrackingNo = (e) => {
//     setTrackingNo(e.target.value);
//   };

//   const handleSearch = async () => {
//     if (!trackingNo) {
//       alert(t("Please enter a tracking number"));
//       return;
//     }

//     try {
//       const res = await fetch(
//         `https://tracking.bosta.co/shipments/track/${trackingNo}`,
//         {
//           method: "GET",
//           headers: {
//             "x-requested-by": "Bosta",
//           },
//         }
//       );
//       if (!res.ok) {
//         throw new Error(t("Failed to fetch data"));
//       }

//       const data = await res.json();
//       setResponse(data);
//       setError(null);
//       if (onSearchComplete) {
//         onSearchComplete(data);
//       }

//       // Hide the container upon successful search
//     } catch (err) {
//       setError(err.message);
//       console.error(err);
//     }
//   };

//   return (
//     <div
//       style={{
//         display: "flex", // Toggle display
//         flexDirection: "column",
//         alignItems: "center",
//         padding: "1rem",
//         // border: "1px solid black", // Ensure no border remains
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: currentLanguage === "ar" ? "row-reverse" : "row",
//           padding: "1rem",
//         }}
//       >
//         <TextField
//           autoComplete="off"
//           id="outlined-basic"
//           placeholder={t("TrackingNo")}
//           variant="outlined"
//           required
//           sx={{
//             margin: "1rem",
//             borderRadius: "10%",
//             width: "300px",
//             backgroundColor: "white",
//             display:
//               source === 1
//                 ? { xs: "none", sm: "flex" }
//                 : { xs: "flex", sm: "none" },
//           }}
//           onChange={handleTrackingNo}
//         />
//         <Button
//           type="submit"
//           variant="contained"
//           sx={{
//             margin: "1rem",
//             backgroundColor: "#e30613",
//             display:
//               source === 1
//                 ? { xs: "none", sm: "flex" }
//                 : { xs: "flex", sm: "none" },
//           }}
//           onClick={handleSearch}
//         >
//           <SearchIcon />
//         </Button>
//       </div>
//       {error && <p style={{ color: "red" }}>{error}</p>}
//     </div>
//   );
// }

// export default SearchBar;
import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import SearchIcon from "@mui/icons-material/Search";

function SearchBar({ currentLanguage, source, onSearchComplete }) {
  const { t } = useTranslation("global");
  const [trackingNo, setTrackingNo] = useState("");
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleTrackingNo = (e) => {
    setTrackingNo(e.target.value);
  };

  const handleSearch = async () => {
    if (!trackingNo) {
      alert(t("Please enter a tracking number"));
      return;
    }

    try {
      const res = await fetch(
        `https://tracking.bosta.co/shipments/track/${trackingNo}`,
        {
          method: "GET",
          headers: {
            "x-requested-by": "Bosta",
          },
        }
      );
      if (!res.ok) {
        throw new Error(t("Failed to fetch data"));
      }

      const data = await res.json();
      setResponse(data);
      setError(null);
      if (onSearchComplete) {
        onSearchComplete(data);
      }
    } catch (err) {
      setError(err.message);
      console.error(err);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: currentLanguage === "ar" ? "row-reverse" : "row",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <TextField
        autoComplete="off"
        id="outlined-basic"
        placeholder={t("TrackingNo")}
        variant="outlined"
        required
        sx={{
          margin: "0.5rem",
          width: { xs: "100%", sm: "300px" }, // Responsive width
          backgroundColor: "white",
          display:
            source === 1
              ? { xs: "none", sm: "flex" }
              : { xs: "flex", sm: "none" },
        }}
        onChange={handleTrackingNo}
      />
      <Button
        type="submit"
        variant="contained"
        sx={{
          margin: "0.5rem",
          backgroundColor: "#e30613",
          width: { xs: "100%", sm: "auto" }, // Responsive button width
          display:
            source === 1
              ? { xs: "none", sm: "flex" }
              : { xs: "flex", sm: "none" },
        }}
        onClick={handleSearch}
      >
        <SearchIcon />
      </Button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}

export default SearchBar;
