import twilio from 'twilio';

// Your Twilio API credentials
const accountSid: string = '';
const authToken: string = '';

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
