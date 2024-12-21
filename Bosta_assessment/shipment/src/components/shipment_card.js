import React, { useState } from "react";
import {
  Typography,
  Card,
  CardContent,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTranslation } from "react-i18next";

const SearchCard = ({ response }) => {
  const { t } = useTranslation("global");

  const [showCard, setShowCard] = useState(false); // Mobile: Controls card visibility
  const [showAllEntries, setShowAllEntries] = useState(false); // Desktop: Controls entry visibility

  const isMobile = useMediaQuery("(max-width: 600px)");

  const formatDate = (dateString) => {
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatTime = (dateString) => {
    const date = new Date(dateString);
    if (isNaN(date)) return "Invalid Date";
    const options = { hour: "2-digit", minute: "2-digit", hour12: true };
    return date.toLocaleTimeString(undefined, options);
  };

  const groupByDate = (events) => {
    return events.reduce((groups, event) => {
      const eventDate = formatDate(event.timestamp);
      if (!groups[eventDate]) groups[eventDate] = [];
      groups[eventDate].push(event);
      return groups;
    }, {});
  };

  const groupedEvents = groupByDate(response.TransitEvents);
  const allEvents = Object.values(groupedEvents).flat();
  const eventsToShow = showAllEntries ? allEvents : allEvents.slice(0, 4);

  return (
    <div>
      {isMobile ? (
        // Mobile View
        <div style={{ margin: "1rem" }}>
          {!showCard && (
            <Button
              variant="contained"
              onClick={() => setShowCard(true)}
              style={{
                marginBottom: "1rem",
                padding: "8px 20px",
                fontSize: "1rem",
                borderRadius: "20px",
              }}
            >
              {t("Show More")}
            </Button>
          )}
          {showCard && (
            <Card
              sx={{
                marginTop: "1rem",
                marginBottom: "1rem",
                width: "90%",
                padding: "1rem",
                overflowY: "auto",
              }}
            >
              <CardContent>
                <Typography variant="h6" style={{ marginTop: "1rem" }}>
                  {t("Tracking Details")}
                </Typography>
                <div
                  style={{
                    borderLeft: "2px solid #e0e0e0",
                    marginLeft: "1rem",
                    paddingLeft: "1rem",
                  }}
                >
                  {Object.keys(groupedEvents).map((date, index) => (
                    <div key={index}>
                      <Typography
                        variant="h6"
                        style={{
                          marginBottom: "1rem",
                          textAlign: "left",
                        }}
                      >
                        <strong>{date}</strong>
                      </Typography>
                      {groupedEvents[date].map((event, idx) => (
                        <div key={idx} style={{ marginBottom: "1rem" }}>
                          {event.code !== 47 && (
                            <Card
                              sx={{
                                marginTop: "1rem",
                                marginBottom: "1rem",
                                width: "80%",
                                padding: "1rem",
                                overflowY: "auto",
                              }}
                            >
                              <Typography variant="body2">
                                {event.state}
                              </Typography>
                              {event.msg && (
                                <Typography
                                  variant="body2"
                                  style={{ color: "#757575" }}
                                >
                                  {event.msg}
                                </Typography>
                              )}
                              <Typography
                                variant="body2"
                                style={{ color: "#757575" }}
                              >
                                <strong>{formatTime(event.timestamp)}</strong>
                              </Typography>
                            </Card>
                          )}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button
                    variant="contained"
                    onClick={() => setShowCard(false)}
                    style={{
                      marginTop: "1rem",
                      padding: "8px 20px",
                      fontSize: "1rem",
                      borderRadius: "20px",
                    }}
                  >
                    {t("Show Less")}
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      ) : (
        // Desktop View
        <Card
          sx={{
            marginTop: "2rem",
            marginBottom: "2rem",
            width: "90%",
            padding: "1.5rem",
            overflowY: "auto",
            margin: "20px auto",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          }}
        >
          <CardContent>
            <Typography variant="h6" style={{ marginTop: "1rem" }}>
              {t("Tracking Details")}
            </Typography>
            <div
              style={{
                borderLeft: "2px solid #e0e0e0",
                marginLeft: "1rem",
                paddingLeft: "1rem",
              }}
            >
              {Object.keys(groupedEvents).map((date, index) => {
                const dateEvents = eventsToShow.filter(
                  (event) => formatDate(event.timestamp) === date
                );

                if (dateEvents.length === 0) return null;

                return (
                  <div key={index}>
                    <Typography variant="h6" style={{ marginBottom: "1rem" }}>
                      <strong>{date}</strong>
                    </Typography>
                    {dateEvents.map((event, idx) => (
                      <div key={idx} style={{ marginBottom: "1rem" }}>
                        {event.code !== 47 && (
                          <Card
                            sx={{
                              marginTop: "1rem",
                              marginBottom: "1rem",
                              width: "85%",
                              padding: "1rem",
                              overflowY: "auto",
                              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                            }}
                          >
                            <Typography variant="body2">
                              {event.state}
                            </Typography>
                            {event.msg && (
                              <Typography
                                variant="body2"
                                style={{ color: "#757575" }}
                              >
                                {event.msg}
                              </Typography>
                            )}
                            <Typography
                              variant="body2"
                              style={{ color: "#757575" }}
                            >
                              <strong>{formatTime(event.timestamp)}</strong>
                            </Typography>
                          </Card>
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
            <div
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "10px",
                borderRadius: "8px",
                marginTop: "20px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                onClick={() => setShowAllEntries(!showAllEntries)}
                style={{
                  marginTop: "1rem",
                  padding: "8px 20px",
                  fontSize: "1rem",
                  borderRadius: "20px",
                }}
              >
                {showAllEntries ? t("Show Less") : t("Show More")}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default SearchCard;
