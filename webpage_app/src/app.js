// 1. Import functions from api.js
import { renderMessage } from "./dom.js";
import { fetchStockQuote, fetchCompanyOverview } from "./api.js";

// 2. Get references to HTML elements
const stockForm = document.querySelector("#stock-form");
const stockResults = document.querySelector("#stock-results");
const errorMessage = document.querySelector("#error-message");

// 3. Add event listener with async arrow function
stockForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  // 4. Get user input
  const ticker = document.querySelector("#ticker").value.trim();
  if (!ticker) return;

  // 5. Show loading message
  renderMessage(stockResults, "Loading stock data...");

  // 6. Try-catch for error handling
  try {
    // 7. Call API functions with await
    // Fetch data from BOTH endpoints

    const quote = await fetchStockQuote(ticker);
    const overview = await fetchCompanyOverview(ticker);

    
    // 8. Extract data
    const symbol = quote['01. symbol'];
    const price = parseFloat(quote['05. price']).toFixed(2);
    const change = parseFloat(quote['09. change']).toFixed(2);
    const changePercent = quote['10. change percent'];
    const volume = parseInt(quote['06. volume']).toLocaleString();
    const previousClose = parseFloat(quote['08. previous close']).toFixed(2);
  
       const companyName = overview['Name'] || symbol;
    const sector = overview['Sector'] || 'N/A';
    const industry = overview['Industry'] || 'N/A';

     // Build the message (simple, like professor does)
    let message = `<h2>${companyName} (${symbol})</h2>`;
    message += `<p><strong>Current Price:</strong> $${price}</p>`;
    message += `<p><strong>Change:</strong> ${change} (${changePercent})</p>`;
    message += `<p><strong>Previous Close:</strong> $${previousClose}</p>`;
    message += `<p><strong>Volume:</strong> ${volume}</p>`;
    message += `<p><strong>Sector:</strong> ${sector}</p>`;
    message += `<p><strong>Industry:</strong> ${industry}</p>`;
    
    // Display results
    stockResults.innerHTML = message;

     } catch (err) {
    renderMessage(stockResults, `Error: ${err.message}`);
    console.error('Error fetching stock data:', err);
  }
});