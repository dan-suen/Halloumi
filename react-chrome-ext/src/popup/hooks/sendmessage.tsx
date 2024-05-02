import axios from 'axios';

const sendMessage = (phoneNumber : string , message: string) => {
  return new Promise((resolve, reject) => {
    axios.post('https://express-server-for-extension.glitch.me/send-sms', {
      phoneNumber: phoneNumber,
      message: message
    })
    .then(response => {
      resolve(response.data);
    })
    .catch(error => {
      reject(error);
    });
  });
};

export default sendMessage;