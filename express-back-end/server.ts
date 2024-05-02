import express, { Request, Response } from 'express';
import sendSMS from './sendmessage'; // Assuming sendmessage.ts exports a default function
import { AddressInfo } from 'net';

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Route to send an SMS message
app.post('/send-sms', async (req: Request, res: Response) => {
  const { phoneNumber, message } = req.body;

  try {
    await sendSMS(phoneNumber, message);
    res.status(200).send('Success!!');
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error sending message');
  }
});

// Start the server
const listener = app.listen(port, () => {
  const addressInfo = listener.address() as AddressInfo;
  if (addressInfo) {
    console.log("Your app is listening on port " + addressInfo.port);
  } else {
    console.log("Your app is listening on an unknown port");
  }
});