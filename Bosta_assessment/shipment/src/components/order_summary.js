import React from "react";
import {
  Typography,
  Box,
  Card,
  CardContent,
  useMediaQuery,
} from "@mui/material";

// Helper function to format the date
const formatDate = (dateString) => {
  const date = new Date(dateString);
  const options = {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

const OrderTrackingCard = ({ response }) => {
  const promisedDate = response.PromisedDate || "N/A";
  const arrivalDate = response.CurrentStatus?.timestamp || "N/A";
  const orderNumber = response.TrackingNumber || "N/A";
  const currentStage = response.CurrentStatus?.state || "PACKAGE_RECEIVED";

  const formattedPromisedDate = formatDate(promisedDate);
  const formattedArrivalDate =
    arrivalDate !== "N/A" ? formatDate(arrivalDate) : "N/A";
  const today = new Date();

  const differenceInTime = new Date(promisedDate).getTime() - today.getTime();
  const numberOfDays = Math.ceil(differenceInTime / (1000 * 3600 * 24));

  let progress = 0;
  switch (currentStage) {
    case "Received at warehouse":
      progress = 25;
      break;
    case "Processing":
      progress = 50;
      break;
    case "Out for delivery":
      progress = 75;
      break;
    case "Delivered":
      progress = 100;
      break;
    default:
      progress = 0;
  }

  // Detect screen size
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  return (
    <Card
      sx={{
        borderRadius: "10px",
        backgroundColor: "#ffffff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        width: "50%",
        margin: "0 auto",
        "@media (max-width: 1025px)": {
          width: "90%",
        },
      }}
    >
      <CardContent>
        <Typography variant="subtitle1" color="textSecondary">
          ORDER #{orderNumber}
        </Typography>
        <Typography variant="h5" color="primary" sx={{ fontWeight: "bold" }}>
          Arriving by {formattedPromisedDate}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          sx={{ marginBottom: "1rem" }}
        >
          {numberOfDays < 0
            ? `Your order has already arrived ${Math.abs(
                numberOfDays
              )} day(s) ago.`
            : `Your order is expected to arrive in ${numberOfDays} day(s).`}
        </Typography>
        <Box sx={{ borderBottom: "2px solid #e0e0e0", marginBottom: "1rem" }} />

        {/* Responsive Progress Bar */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isSmallScreen ? "row" : "column",
            alignItems: "center",
          }}
        >
          {/* Progress Bar */}
          <Box
            sx={{
              position: "relative",
              height: isSmallScreen ? "200px" : "10px",
              width: isSmallScreen ? "10px" : "100%",
              backgroundColor: "#f1f1f1",
              borderRadius: "5px",
              overflow: "hidden",
              marginRight: isSmallScreen ? "1rem" : 0,
              marginBottom: isSmallScreen ? 0 : "1rem",
            }}
          >
            <Box
              sx={{
                position: "absolute",
                top: isSmallScreen ? 0 : undefined,
                left: isSmallScreen ? undefined : 0,
                width: isSmallScreen ? "100%" : `${progress}%`,
                height: isSmallScreen ? `${progress}%` : "100%",
                backgroundColor: "#4caf50",
              }}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row", // Row for large, column for small
              justifyContent: isSmallScreen ? "space-between" : "center",
              alignItems: isSmallScreen ? "flex-start" : "center",
              marginLeft: isSmallScreen ? "1rem" : 0, // Space between bar and labels for small screens
              marginTop: isSmallScreen ? 0 : "1rem", // Space below the bar for large screens
              width: isSmallScreen ? "auto" : "100%",
              gap: isSmallScreen ? "1.5rem" : "3.5rem", // Add horizontal spacing for large screens
            }}
          >
            {/* <Typography
              variant="body2"
              color={progress >= 25 ? "primary" : "textSecondary"}
              sx={{
                marginBottom: isSmallScreen ? "1rem" : 0, // Vertical spacing for small screens
                textAlign: isSmallScreen ? "left" : "center", // Align text based on screen size
              }}
            >
              Picked Up
            </Typography>
            <Typography
              variant="body2"
              color={progress >= 50 ? "primary" : "textSecondary"}
              sx={{
                marginBottom: isSmallScreen ? "1rem" : 0,
                textAlign: isSmallScreen ? "left" : "center",
              }}
            >
              Processing
            </Typography>
            <Typography
              variant="body2"
              color={progress >= 75 ? "primary" : "textSecondary"}
              sx={{
                marginBottom: isSmallScreen ? "1rem" : 0,
                textAlign: isSmallScreen ? "left" : "center",
              }}
            >
              Out For Delivery
            </Typography>
            <Typography
              variant="body2"
              color={progress === 100 ? "primary" : "textSecondary"}
              sx={{
                textAlign: isSmallScreen ? "left" : "center",
              }}
            >
              Delivered
            </Typography> */}
            {[
              { label: "Picked Up", progressLevel: 25 },
              { label: "Processing", progressLevel: 50 },
              { label: "Out For Delivery", progressLevel: 75 },
              { label: "Delivered", progressLevel: 100 },
            ].map((step) => (
              <Box
                key={step.label}
                sx={{
                  textAlign: isSmallScreen ? "left" : "center", // Align text based on screen size
                }}
              >
                <Typography
                  variant="body2"
                  color={
                    progress >= step.progressLevel ? "primary" : "textSecondary"
                  }
                >
                  {step.label}
                </Typography>
                {progress === step.progressLevel && (
                  <Typography
                    variant="caption"
                    color="textSecondary"
                    sx={{ display: "block", marginTop: "0.25rem" }}
                  >
                    {formattedArrivalDate}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default OrderTrackingCard;
