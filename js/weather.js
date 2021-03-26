// weather.js HELPER CODE
// Make an HTTP GET Request to an API, parse the JSON response, and return a Javascrip object
async function makeAPIRequest(requestURL) {

    let response = await fetch(requestURL);

    if (response.ok) { // if HTTP-status is 200-299

        // Return the parsed JavaScript Object from the JSON data
        return response.json();

    } else {
        console.error("HTTP Error" + response.statusText)
        alert("HTTP-Error: " + response.status);
    }
}

function updateCardsWithForecast( forecast ) {
    console.log( "Forecast: ") 
    console.log( forecast )
}


function getForecast() {
    
    console.log("getting forecast...")
    
    var forecastURL = "https://api.weather.gov/gridpoints/GJT/95,101/forecast"

    // Call Helper Function to make the API request and parse the JSON
    // Use JavaScript Promise to handle the response asynchronously 
    makeAPIRequest(forecastURL).then( response => {
        
        // Log the full response
        console.log("Full Response: ") 
        console.log(response)

        // Process the Important Weather Data
        updateCardsWithForecast(response.properties.periods)
    })
}

getForecast()