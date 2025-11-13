import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppButton = () => {
  return (
    <FloatingWhatsApp
      phoneNumber="601163102661" // your WhatsApp number in international format (no '+' or spaces)
      accountName="ArkGlobal Support" // the name displayed in the chatbox header
      avatar="https://i.ibb.co/6JmY3Xx/avatar.png" // optional - can be your logo or profile image
      statusMessage="Typically replies within a day"
      chatMessage="Hello there! 👋🏼 How can we help you today?"
      placeholder="Type a message..."
      darkMode={false}
      allowClickAway={true}
      notification={true}
      notificationDelay={60}
      notificationSound={true}
      messageDelay={2}
      chatboxHeight={320}
      className="z-50" // ensures it floats above everything
      style={{
        bottom: "24px",
        right: "24px",
      }}
    />
  );
};

export default WhatsAppButton;
