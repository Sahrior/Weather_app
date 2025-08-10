const button = document.getElementById('button');

button.addEventListener('click',async function getweather() {
    const location = document.getElementById('location').value.trim();
    const resultDiv = document.getElementById('result');  // <-- Added here

    if (!location) {
        resultDiv.innerHTML = '<p>Please enter a valid location.</p>';
        return;
    }

    const apiKey = '540c762a8623462384b21541251008';
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${encodeURIComponent(location)}&aqi=yes`;

    try {
        resultDiv.innerHTML = '<p>Loading...</p>';

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Location not found or API error');
        }

        const data = await response.json();

        
        const { location: loc, current } = data;

        resultDiv.innerHTML = `
            <h3>Weather for ${loc.name}, ${loc.region}, ${loc.country}</h3>
            <p><strong>Temperature:</strong> ${current.temp_c} °C (${current.temp_f} °F)</p>
            <p><strong>Condition:</strong> ${current.condition.text}</p>
            <p><img src="${current.condition.icon}" alt="weather icon"></p>
            <p><strong>Humidity:</strong> ${current.humidity}%</p>
            <p><strong>Wind:</strong> ${current.wind_kph} kph (${current.wind_mph} mph)</p>
            <p><strong>Air Quality Index (AQI):</strong> ${data.current.air_quality?.us_epa_index ?? 'N/A'}</p>
        `;

    } catch (error) {
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}
)