import React from 'react';
import './Validation.css';

export const ValidateMessage = ({ message, isValid }) => {
  if (isValid) {
    return <p className="error-message">{message}</p>
  }
  return null;
}