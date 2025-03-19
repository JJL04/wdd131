// Footer: Display Current Year and Last Modified Date
document.addEventListener("DOMContentLoaded", function () {
    const yearSpan = document.querySelector("#currentYear");
    const lastModifiedSpan = document.querySelector("#lastModified");

    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;

    lastModifiedSpan.textContent = document.lastModified;
});

// Wind Chill Calculation
function calculateWindChill(temp, windSpeed) {
    // Wind chill formula (valid for Fahrenheit)
    return (
        35.74 +
        0.6215 * temp -
        35.75 * Math.pow(windSpeed, 0.16) +
        0.4275 * temp * Math.pow(windSpeed, 0.16)
    ).toFixed(2);
}

// Display Wind Chill on Page Load
document.addEventListener("DOMContentLoaded", function () {
    const temperature = 45; // Example temp in °F (adjust as needed)
    const windSpeed = 10; // Example wind speed in mph (adjust as needed)
    const windChillSpan = document.querySelector("#windChill");

    if (temperature <= 50 && windSpeed > 3) {
        windChillSpan.textContent = calculateWindChill(temperature, windSpeed) + "°F";
    } else {
        windChillSpan.textContent = "N/A";
    }
});
