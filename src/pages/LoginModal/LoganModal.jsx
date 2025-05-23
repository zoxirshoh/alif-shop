import React from "react";
import "./LoginModal.css";

const LoginModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Avtorizatsiya alif shop</h2>
        <input type="text" placeholder="+998" className="phone-input" />
        <button className="yellow-btn">Davom etish</button>
        <button className="gray-btn" onClick={onClose}>Bekor qilish</button>
      </div>
    </div>
  );
};

export default LoginModal;
