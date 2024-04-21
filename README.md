# Weather App

## Demo App

The demo app can be found here [demo-app](https://weather-github.netlify.app/)

## Description

This project involves creating a web application using React to display weather information based on user input. The application should be designed with a focus on feature completeness, code readability, web standards compliance, code reusability and extendibility, compatibility with different display resolutions, and an appropriate user interface style and experience.

## Task

The application should implement a page titled "Today’s Weather" based on the provided mockup. The design and styling are open to interpretation, but the functionality should align with the requirements outlined below.

## Requirements

1. **Display Information**: The application must display weather information as per the mockup UI.
2. **User Input for Weather Information**: Users should be able to input a city and country name to retrieve and display weather information. This should be achieved using AJAX to fetch data from the OpenWeatherAPI (https://openweathermap.org/api).
3. **Search History**: Users should be able to view their search history. Each entry in the history should have a search button to fetch the weather information again and a delete button to remove the record from the history.
4. **Error Handling**: If a user inputs an invalid city or country name, the application should display an appropriate error message on the UI.
5. **Theme Selection**: The application should support either a dark or light theme based on the developer's preference.
6. **Optional Theme Switcher**: An optional feature could include a theme switcher that allows users to toggle between dark and light themes.

## Sample Mockup

The mockup for the desktop and mobile versions of the application can be previewed at the following Figma link: [Weather App Mockup](https://www.figma.com/file/4QjlaIXuvEEMUdvvBKjDZH/Weather-App?node-id=0%3A1&t=uTr6LSt1NTovAc).

## Assets

The assets for the application, including background images and weather icons, can be found in the following Google Drive folder: [Weather App Assets](https://drive.google.com/drive/folders/1lE9E0PQkjg9ynU7t7muJaa7lKztT9mQb).

## Getting Started

To get started with this project, clone the repository and install the necessary dependencies (npm install or yarn install). Then, follow the development guidelines provided below.

## Environment Variables

Please create a .env file and add the following environment variables to your .env file.

- VITE_OPEN_WEATHER_BASE_URL=https://api.openweathermap.org/data/2.5/weather
- VITE_OPEN_WEATHER_API_KEY=<YOUR_OWN_OPEN_WEATHER_API_KEY>
