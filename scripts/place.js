// ================================
// Footer Information
// ================================

const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();

lastModified.textContent = `Last Modified: ${document.lastModified}`;

// ================================
// Weather Data (Static Values)
// ================================

const temperature = 8; // °C
const windSpeed = 10; // km/h

// ================================
// Wind Chill Calculation Function
// Metric Formula (°C and km/h)
// ================================

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * Math.pow(speed, 0.16)) + (0.3965 * temp * Math.pow(speed, 0.16));
}

// ================================
// Wind Chill Display
// ================================

const windChillElement = document.querySelector("#windchill");

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = `${windChill.toFixed(1)} °C`;
} else {
    windChillElement.textContent = "N/A";
}