import React from "react";
import "./chatMessage.css";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="message-wrapper">
      <img
        alt="user-icon"
        src="https://uxwing.com/wp-content/themes/uxwing/download/business-professional-services/business-professional-icon.png"
        width={30}
        height={30}
        style={{
            background: "white",
            borderRadius: "50%"
        }}
      />
      <div>
        <span className="message-name">{name}</span>
        <span>{message}</span>
      </div>
    </div>
  );
};

export default ChatMessage;
