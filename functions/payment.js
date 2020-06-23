exports.handler = function(event, context, callback) {
  const Midtrans = require('midtrans-client');
  console.log(process.env.MIDTRANS_SERVER_KEY, process.env.MIDTRANS_CLIENT_KEY);

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
    })
    .catch((e) => console.error(`error: ${e.message}`));

  callback(null, {
    statusCode: 200,
    body: redirectUrl
  });
};
