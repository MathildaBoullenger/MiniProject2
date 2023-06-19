# MiniProject2

1. Purpose: 
The purpose of this app is to connect runners with other runners in their area based on location and optional gender filters.

2. Main code: 
The runners' data is fetched from our own API in the backend. The frontend consists of individual components such as buttons, dropdowns, and cards. Each page (homepage, select page, and runners page) has its own main component that combines all the necessary components for that page.

We have set up context to access the data retrieved from the dropdown and radio button throughout the entire app. Additionally, we use a theme and provide it to the entire app. Navigation within the app is handled using react-router-dom.

There is some unused code related to "running distance," and we have implemented a hook that captures the start time for future features.

3. Credits: 
This project utilizes the following technologies and frameworks:

Express for the backend
React for the frontend
MUI as a CDN


