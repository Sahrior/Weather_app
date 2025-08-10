Weather App
A modern, responsive Weather App built with HTML, CSS, and JavaScript that fetches real-time weather data from WeatherAPI. This project demonstrates how to integrate third-party APIs with frontend technologies to deliver dynamic, interactive user experiences.

Features
User input for location: Users can enter any city or place name to get up-to-date weather information.

Live weather data: Displays temperature in both Celsius and Fahrenheit, weather conditions with icons, humidity, wind speed, and air quality index (AQI).

Asynchronous data fetching: Uses fetch API with async/await for smooth, non-blocking network requests.

Input validation: Prevents empty searches and displays appropriate error messages.

Error handling: Gracefully handles invalid locations or API failures, showing user-friendly error feedback.

Responsive and visually appealing UI:

Gradient backgrounds and subtle shadows for a modern look.

Styled inputs and buttons with smooth transitions and hover/focus effects.

Technologies Used
HTML5 for semantic structure.

CSS3 with gradients, box shadows, and transitions for styling and user experience.

JavaScript for API calls, DOM manipulation, input validation, and asynchronous programming.

How it works
User types a location in the input box.

Upon clicking the "Get Weather" button, an API call is made to WeatherAPI's current weather endpoint with the provided location.

The app fetches weather data including temperature, condition, humidity, wind, and AQI.

The results are dynamically rendered in the .result container with clear formatting and icons.

If an invalid location is entered or the API call fails, the user sees an appropriate error message.

Getting Started
Clone or download this repository.

Replace the apiKey variable in script.js with your own WeatherAPI key.

Open index.html in any modern web browser.

Enter a location and click "Get Weather" to see the live weather details.
