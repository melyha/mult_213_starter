# Stock Price Tracker

A web application that fetches real-time stock market data using the Alpha Vantage API.

## Setup Instructions

1. **Install dependencies:**
```bash
   npm install
```

2. **Get a FREE API Key:**
   - Visit: https://www.alphavantage.co/support/#api-key
   - Enter your email to receive a free API key

3. **Add your API Key:**
   - Open `src/api.js`
   - line 4: `const API_KEY = 'demo';`
   - Replace `'demo'` with your actual API key


4. **Run the application:**
```bash
   npm run watch
```
- Try ticker symbols like: **IBM**, **AAPL**, **TSLA**, **MSFT**

## Features

- Real-time stock quotes (current price, change, volume)
- Company information (sector, industry)
- Error handling with user-friendly messages
  
  
## API Endpoints Used

1. **GLOBAL_QUOTE** - Current stock price and metrics
2. **OVERVIEW** - Company details and classification