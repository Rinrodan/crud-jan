import Toast from 'react-bootstrap/Toast';
import React, { useState } from 'react';



export const PasswordToast = () => {

const [showPasswordToast, setShowPasswordToast] = useState(true);


  const toggleShowToast = () => showPasswordToast(!setShowPasswordToast);


  return (
 
        <Toast show={showPasswordToast} onClose={toggleShowToast}>
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
        </Toast>
      
  );
}

