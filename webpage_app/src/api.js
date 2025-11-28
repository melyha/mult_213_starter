// API functions to integrate with with Alpha Vantage Stock API
// Reference: https://www.alphavantage.co/documentation/

const API_KEY = 'demo';

/**
 * Fetch current stock quote (price, change, etc.)
 * Uses GLOBAL_QUOTE endpoint
 */

export async function fetchStockQuote(ticker)  {
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${ticker}&apikey=${API_KEY}`;
 
  const res = await fetch(url);

    
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  

  // Get the JSON from the HTTP request response
  const data = await res.json();

  // Log the data to look at it
  console.log('Stock Quote Data:', data);

   // Check if we got valid data
  if (data['Global Quote'] && Object.keys(data['Global Quote']).length > 0) {
    return data['Global Quote'];
  } else if (data['Note']) {
    // API rate limit reached
    throw new Error('API rate limit reached. Please try again later or use a different ticker.');
  } else if (data['Error Message']) {
    throw new Error('Invalid ticker symbol. Please check and try again.');
  } else {
    throw new Error('No data found for this ticker symbol.');
  }
}

/**
 * Fetch company overview information
 * Uses OVERVIEW endpoint
 */

export async function fetchCompanyOverview(ticker) {
  const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${ticker}&apikey=${API_KEY}`;
  // Start our call across the internet, using lat and long as a parameters
  
  const res = await fetch(url);

  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  

  // Get the JSON from the HTTP request response
  const data = await res.json();
  
  // Log the data to look at it
  console.log('Company Overview Data:', data);
  
  // Check if we got valid data
  if (data['Symbol']) {
    return data;
  } else if (data['Note']) {
    throw new Error('API rate limit reached. Please try again later.');
  } else {
    throw new Error('No company information found for this ticker.');
  }
}

