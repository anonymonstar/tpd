const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  const WEBFLOW_API_KEY = 'fe828a50fc10216bfe01f9b84d4c20ce97c6f12522a52062d1a046606696b82e';
  const COLLECTION_ID = '6703fd91503b242fa5062b25 ';

  try {
    const response = await fetch(`https://api.webflow.com/collections/${COLLECTION_ID}/items?limit=100`, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${WEBFLOW_API_KEY}`,
        'accept-version': '1.0.0'
      }
    });

    const data = await response.json();

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',  // This allows any domain to access the resource
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
      },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',  // Ensure the CORS header is present on error as well
      },
      body: JSON.stringify({ error: 'Error fetching data from Webflow' }),
    };
  }
};
