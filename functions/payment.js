exports.handler = function(event, context, callback) {
  const Midtrans = require('midtrans-client');
  const querystring = require('querystring');
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE'
  };

  const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
  });

  console.log(event.queryStringParameters);
  const params = querystring.parse(event.body);

  const parameter = {
    transaction_details: {
      order_id: params.pid,
      gross_amount: params.nominal
    },
    credit_card: {
      secure: true
    }
  };

  snap
    .createTransaction(parameter)
    .then((transaction) => {
      const { token } = transaction;
      console.log(`Token: ${token}`);

      const redirectUrl = transaction.redirect_url;
      console.log(`URL: ${redirectUrl}`);

      callback(null, {
        statusCode: 200,
        headers,
        body: JSON.stringify({
          url: redirectUrl,
          params: parameter
        })
      });
    })
    .catch((e) => {
      console.error(`error: ${e.message}`);
      callback(null, {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: e.message })
      });
    });
};
