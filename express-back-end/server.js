var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import express from 'express';
import sendSMS from './sendmessage.js'; // Assuming sendmessage.ts exports a default function
const app = express();
const port = process.env.PORT || 3000;
// Middleware to parse JSON bodies
app.use(express.json());
// Route to send an SMS message
app.post('/send-sms', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { phoneNumber, message } = req.body;
    try {
        yield sendSMS(phoneNumber, message);
        res.status(200).send('Success!!');
    }
    catch (error) {
        console.error('Error:', error);
        res.status(500).send('Error sending message');
    }
}));
// Start the server
const listener = app.listen(port, () => {
    const addressInfo = listener.address();
    if (addressInfo) {
        console.log("Your app is listening on port " + addressInfo.port);
    }
    else {
        console.log("Your app is listening on an unknown port");
    }
});
