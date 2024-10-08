exports.handler = async function(event, context) {
    return {
        statusCode: 200,
        headers: {
            'Access-Control-Allow-Origin': '*',  // This allows any domain to access the resource
            'Access-Control-Allow-Headers': 'Content-Type',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        },
        body: JSON.stringify({ message: "CORS headers are working!" })
    };
};
