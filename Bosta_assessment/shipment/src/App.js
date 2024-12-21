import React, { useState } from "react";
import Header from "./components/Header";
import Search from "./components/shipment_search";
import DataShowing from "./components/dataShowing";

function App() {
  const [language, setLanguage] = useState("English");

  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <Header />
    </div>
  );
}

export default App;
