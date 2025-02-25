import React from 'react';
import { Link } from 'react-router-dom';

const SubmittedDetails = ({ formData, setIsSubmitted }) => {
  const handleBackClick = () => {
    setIsSubmitted(false); // Reset the form submission status
  };

  return (
    <div className="submitted-details-container">
      <h2>Submitted Details</h2>
      <ul>
        <li><strong>Username: </strong>{formData.username}</li>
        <li><strong>Email: </strong>{formData.email}</li>
        <li><strong>Phone Number: </strong>{formData.phoneNumber}</li>
        <li><strong>Gender: </strong>{formData.gender}</li>
        <li><strong>Personal ID: </strong>{formData.personalId}</li>
        <li><strong>Date: </strong>{formData.date}</li>
        <li><strong>Text: </strong>{formData.text}</li>
      </ul>
      <Link 
        to="/" 
        className="back-button" 
        onClick={handleBackClick}
      >
        Go Back to Form
      </Link>
    </div>
  );
};

export default SubmittedDetails;
