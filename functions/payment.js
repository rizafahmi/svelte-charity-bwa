exports.handler = function(event, context, callback) {
  const Midtrans = require('midtrans-client');

  const snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.MIDTRANS_SERVER_KEY,
    clientKey: process.env.MIDTRANS_CLIENT_KEY
  });

  const parameter = {
    transaction_details: {
      order_id: '124',
      gross_amount: 20000
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
        body: JSON.stringify({ url: redirectUrl })
      });
    })
    .catch((e) => {
      console.error(`error: ${e.message}`);
      callback(null, {
        statusCode: 400,
        body: JSON.stringify({ error: e.message })
      });
    });
};
