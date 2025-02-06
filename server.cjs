const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.get('/api/crypto', async (req, res) => {
  try {
    const response = await axios.get('https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest', {
      headers: {
        'X-CMC_PRO_API_KEY': 'e3d0acf7-de60-40c9-8cce-a27565fb1a7e',
      },
    });
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching data from CoinMarketCap");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
