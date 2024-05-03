import twilio from 'twilio';

// Your Twilio API credentials
const apiKey: string = 'SK90d23fe6d1fa397dc421ff4e66b766d1';
const authToken: string = 'O120d38KUlOMxGaWAMnvxVnffLbUYoUD';
const accountSid: string = 'ACc74e1bc5f3681f72698237f33c0227ec';


// Create a Twilio client instance with the API Key
const client = twilio(apiKey, authToken, { accountSid: accountSid });

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
