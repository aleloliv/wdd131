const currentyear = document.querySelector("#currentyear");

const today = new Date();

currentyear.textContent = today.getFullYear();

let oLastModif = new Date(document.lastModified);

const lastModified = document.querySelector("#lastModified");

function addLeadingZero(number) 
{
  return number < 10 ? '0' + number : number;
}
  
let formattedDate = addLeadingZero(oLastModif.getMonth() + 1) + '/' +
                    addLeadingZero(oLastModif.getDate()) + '/' +
                    oLastModif.getFullYear() + ' ' +
                    addLeadingZero(oLastModif.getHours()) + ':' +
                    addLeadingZero(oLastModif.getMinutes()) + ':' +
                    addLeadingZero(oLastModif.getSeconds());

lastModified.textContent = "Last Modification: " + formattedDate;

// Function to calculate wind chill
function calculateWindChill(temperature, windSpeed) {
    // Constants for wind chill calculation (you can adjust these as needed)
    const metric = true; // Set to false for imperial units (°F)
    const tempUnit = metric ? '°C' : '°F';
    const speedUnit = metric ? 'km/h' : 'mph';
    
    // Conditions for viable wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
        // Wind chill calculation formula
        return Math.round(13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16))) + ' ' + tempUnit;
    } else {
        return 'N/A'; // Return N/A if conditions are not met
    }
}

// Function to update wind chill value in HTML
function updateWindChill() {
    // Static values for temperature and wind speed (you can adjust these as needed)
    const temperature = 24; // in °C
    const windSpeed = 7; // in km/h
    
    // Calculate wind chill
    const windChill = calculateWindChill(temperature, windSpeed);
    
    // Update wind chill value in HTML
    document.getElementById('windChill').textContent = windChill;
}

// Call updateWindChill function when the page loads
window.onload = updateWindChill;