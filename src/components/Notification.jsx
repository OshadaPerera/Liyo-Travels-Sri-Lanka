import React from "react";
import "./styles/notificationStyles.css"; // Ensure to import your styles

const Notification = ({ message, type, onClose }) => {
  if (!message) return null; // Do not render if there is no message

  return (
    <div className={`notification ${type}`}>
      {message}
      <button className="close-button" onClick={onClose}>
        &times;
      </button>
    </div>
  );
};

export default Notification;
