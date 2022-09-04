require("dotenv").config();

const accountSid = process.env.TWILIO_ACCOUNT_SID; // Your Account SID from www.twilio.com/console
const authToken = process.env.TWILIO_AUTH_TOKEN; // Your Auth Token from www.twilio.com/console
const senderNumber = process.env.TWILIO_NUMBER; // twilio number

const sendSms = (phone, message) => {
    const twilio = require('twilio');
    const client = new twilio(accountSid, authToken);

    client.messages
        .create({
            body: message,
            to: phone, // Text this number
            from: senderNumber, // From a valid Twilio number
        })
        .then((message) => console.log(message.sid));
}

module.exports = {sendSms};