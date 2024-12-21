import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import searchImg from "./search_img.png";
import SearchBar from "./search_field"; // Importing the updated SearchBar
import DataShowing from "./dataShowing";

function Search() {
  const { t, i18n } = useTranslation("global");
  const currentLanguage = i18n.language;

  const [response, setResponse] = useState(null);

  const handleSearchResponse = (response) => {
    setResponse(response);
    console.log("Response received in Header:", response);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          // border: "1px solid black",
        }}
      >
        <Container
          sx={{
            margin: "1rem",
            padding: "1rem",
            borderRadius: "1rem",
            bgcolor: "#f3fafb",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            // border: "1px solid black",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={searchImg}
              alt="search"
              style={{
                width: "44%",
                height: "44%",
                margin: "auto",
              }}
            />
            <Typography
              variant="h4"
              sx={{
                color: "black",
                textAlign: "center",
                fontWeight: "bold",
              }}
            >
              {t("trackOrderTitle")}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                marginTop: "1rem",
                color: "black",
                textAlign: "center",
              }}
            >
              {t("trackOrderDescription")}
            </Typography>
          </div>
        </Container>

        {/* Search Bar */}
      </div>
      <SearchBar
        currentLanguage={currentLanguage}
        source={1}
        onSearchComplete={handleSearchResponse}
      />
      <DataShowing response={response} />
    </>
  );
}

export default Search;
