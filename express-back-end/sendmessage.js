var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import twilio from 'twilio';
// Your Twilio API credentials
const apiKey = 'Your Api Key';
const authToken = 'Your AuthToken';
const accountSid = 'Your Account SID';
// Create a Twilio client instance with the API Key
const client = twilio(apiKey, authToken, { accountSid: accountSid });
// Function to send an SMS message
function sendSMSMsg(phoneNumber, message) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const result = yield client.messages.create({
                body: message,
                from: '+Your Twilio Phone Number', // Your Twilio phone number
                to: phoneNumber
            });
            console.log('Message sent:', result.sid);
            return result.sid;
        }
        catch (error) {
            console.error('Error sending message:', error);
            throw error;
        }
    });
}
export default sendSMSMsg;
