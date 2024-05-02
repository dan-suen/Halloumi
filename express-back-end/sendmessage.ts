import twilio from 'twilio';

// Your Twilio API credentials
const accountSid: string = 'ACc74e1bc5f3681f72698237f33c0227ec';
const authToken: string = 'becd1da4b8c1bb115d9738642a007e08';

// Create a Twilio client instance
const client: twilio.Twilio = twilio(accountSid, authToken);

// Function to send an SMS message
async function sendSMSMsg(phoneNumber: string, message: string): Promise<string> {
  try {
    const result: any = await client.messages.create({
      body: message,
      from: '+12569524166', // Your Twilio phone number
      to: phoneNumber
    });
    console.log('Message sent:', result.sid);
    return result.sid;
  } catch (error: any) {
    console.error('Error sending message:', error);
    throw error;
  }
}

export default sendSMSMsg;
