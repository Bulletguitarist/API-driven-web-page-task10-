
// DOM SELECTION
const countryInput = document.getElementById("countryInput");
const searchBtn = document.getElementById("searchBtn");
const resultDiv = document.getElementById("result");
const loadingText = document.getElementById("loading");

// FETCH COUNTRY DATA FUNCTION

// Async function because fetch() returns a Promise
async function fetchCountry() {

    const countryName = countryInput.value.trim();

    // Basic validation
    if (countryName === "") {
        resultDiv.innerHTML = "<p>Please enter a country name.</p>";
        return;
    }

    // Show loading indicator
    loadingText.style.display = "block";
    resultDiv.innerHTML = "";

    try {
        // Sending HTTP request to public API
        const response = await fetch(
            `https://restcountries.com/v3.1/name/${countryName}`
        );

        // Check if response failed (404, etc.)
        if (!response.ok) {
            throw new Error("Country not found");
        }

        // Convert response to JSON
        const data = await response.json();

        // Extract required data (first match)
        const country = data[0];

        // Render data dynamically
        displayCountry(country);

    } catch (error) {
        // Error handling (network / API error)
        resultDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        console.error("Fetch error:", error);
    } finally {
        // Hide loading indicator
        loadingText.style.display = "none";
    }
}

// DISPLAY COUNTRY DATA
function displayCountry(country) {

    resultDiv.innerHTML = `
        <div class="country-card">
            <img src="${country.flags.png}" alt="Flag">
            <h3>${country.name.common}</h3>
            <p><strong>Capital:</strong> ${country.capital}</p>
            <p><strong>Population:</strong> ${country.population}</p>
            <p><strong>Region:</strong> ${country.region}</p>
        </div>
    `;
}

// EVENT LISTENER
searchBtn.addEventListener("click", fetchCountry);
