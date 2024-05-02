import { useState } from "react";
import sendMessage from "../../hooks/sendmessage";

const SendMessageButton = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const handleChangeNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPhoneNumber(value);
  };
  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setMessage(value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(phoneNumber, message)
      .then((data) => {
        console.log("Message sent:", data);
        // Clear the form fields
        setPhoneNumber("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending message:", error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="number">Phone number</label>
        <input
          type="text"
          id="number"
          name="number"
          value={phoneNumber}
          onChange={handleChangeNumber}
        />
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={handleChangeText}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default SendMessageButton;
