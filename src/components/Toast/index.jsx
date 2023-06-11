import React, { useState, useEffect } from 'react';
import { ToastContainer } from './styles';

export const Toast = ({ colorClass, text, isPositive }) => {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowToast(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <ToastContainer
      className={`toast__container ${showToast ? '' : 'hidden'}`}
      color={colorClass}
    >
      <p>{text}</p>
    </ToastContainer>
  );
};


