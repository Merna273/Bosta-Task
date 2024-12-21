import React from "react";
import SearchCard from "./shipment_card.js";
import OrderTrackingCard from "./order_summary.js";

function DataShowing({ response }) {
  console.log("Response received in DataShowing:", response);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
      }}
    >
      {response && (
        <>
          <OrderTrackingCard response={response} />
          <SearchCard response={response} />
        </>
      )}
    </div>
  );
}

export default DataShowing;
