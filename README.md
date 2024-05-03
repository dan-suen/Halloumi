# Halloumi

Halloumi is a ready to use chrome extension built using React and Typescript that allows users to send texts from the Google Chrome browser via the Twilio SMS API. 

## **READ FIRST**
Due to the freemium model of Twilio itself, the backend server currently set up can only message registered Twilio users and is limited by the budget of my Twilio trial account. For the full experience, the extension requires Twilio registration and a hosted backend Express based server (instructions listed below), with the cost of the SMS service being incurred by the user.

### Setting up the Chrome extension
Simply download the build folder in react-chrome-ext/ or extract from the build.crx file in the root then go to [chrome://extensions/](chrome://extensions/). Select load unpacked and navigate to the build folder.

Please change line 5 of the 
``` react-chrome-ext/src/popup/hooks/sendmessage.tsx 
file to your server url or use the existing one (with restrictions stated above)

### Setting up the Express server (optional)
Navigate to 
``` express-back-end/sendmessage.ts 
and fill in your Twilio account information. Then host your Express server locally 
``` node server.js
Or host it online where avaliable.

