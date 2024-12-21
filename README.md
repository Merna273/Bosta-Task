# Bosta-Task
Shipment Tracking Page


# Overview

This project is designed to track orders by providing a progress bar and localized time details. Below are the key assumptions and implementation details:


## Date and Timestamp Handling

#### Timestamps are interpreted based on their full date and time.

Example: 2024-04-06T21:59:59.999Z is considered the 7th of April 2024 as it represents the last second of the 6th of April.

#### Time Zone Conversion

All times are provided in UTC.

To improve user experience, timestamps are displayed in the local time of the user.

## Order Filtering

Only orders with transit events are processed and displayed.

## Language Switching

#### All API responses are in English.

Language switching affects only the static parts of the application (e.g., labels, buttons) as the details fetched from the API are only in English.

## Progress Bar Assumptions

Examples of tracking numbers covering all possible states were unavailable.

Assumptions for the progress bar states are as follows:

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
# Setup and Running the Application

To set up and run this React.js application, follow these steps:

## Prerequisites

Ensure you have the following installed on your system:

1. Node.js (v14 or higher)

2. npm 

## Clone the Repository

git clone (repository-url)

## Start the Development Server

Using npm: npm start


