# Bosta-Task
Shipment Tracking Page


# Overview

This project is designed to track orders by providing a progress bar and localized time details. Below are the key assumptions and implementation details:

# Assumptions

## Date and Timestamp Handling

Timestamps are interpreted based on their full date and time.

Example: 2024-04-06T21:59:59.999Z is considered the 7th of April 2024 as it represents the last second of the 6th of April.

Time Zone Conversion

All times are provided in UTC.

To improve user experience, timestamps are displayed in the local time of the user.

## Order Filtering

Only orders with transit events are processed and displayed.

## Language Switching

All API responses are in English.

Language switching affects only the static parts of the application (e.g., labels, buttons).

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

### Notes

The implementation is built based on the above assumptions. Any additional requirements or scenarios might require updates to the logic and assumptions.

For a fully accurate progress bar, examples of tracking numbers covering all states would be beneficial.

Future Improvements

Incorporate support for multiple languages for dynamic API content.

Enhance progress bar logic with additional stages as more tracking states become available.

Allow users to manually toggle between UTC and local time display.


