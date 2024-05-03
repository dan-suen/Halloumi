import twilio from 'twilio';

// Your Twilio API credentials
const apiKey: string = 'Your Api Key';
const authToken: string = 'Your AuthToken';
const accountSid: string = 'Your Account SID';


// Create a Twilio client instance with the API Key
const client = twilio(apiKey, authToken, { accountSid: accountSid });

// Function to send an SMS message
async function sendSMSMsg(phoneNumber: string, message: string): Promise<string> {
  try {
    const result: any = await client.messages.create({
      body: message,
      from: '+Your Twilio Phone Number', // Your Twilio phone number
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
