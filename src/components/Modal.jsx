
import React from "react";
import { motion as Motion } from "framer-motion";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <Motion.div
        className="bg-gray-900 p-4 rounded-lg shadow-lg max-w-[90%] max-h-[80%] overflow-auto"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.3 }}
      >
        <button
          className="text-white text-sm absolute top-4 right-4"
          onClick={onClose}
        >
          ✕
        </button>
        {children}
      </Motion.div>
    </div>
  );
};

export default Modal;
