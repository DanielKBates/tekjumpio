// production
module.exports = {
    mongoURI: process.env.MONGO_URI,
    paypalClient: process.env.PAYPAL_CLIENT,
    paypalSecret: process.env.PAYPAL_SECRET,
    squareClient: process.env.SQUARE_CLIENT,
    squareSecret: process.env.SQUARE_SECRET,
    mailClient: process.env.MAIL_CLIENT,
    mailSecret: process.env.MAIL_SECRET,
  };