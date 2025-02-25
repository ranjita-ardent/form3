import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LeftSide from './components/LeftSide';
import Form from './components/Form';
import SubmittedDetails from './components/SubmittedDetails';
import './App.css';

function App() {
  const [formData, setFormData] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false); // Track submission status

  return (
    <Router>
      <div className="app-container">
        {/* Conditionally render the left-side based on form submission */}
        {!isSubmitted && (
          <div className="left-side">
            <LeftSide />
          </div>
        )}
        <div className="right-side">
          <Routes>
            <Route
              path="/"
              element={<Form setFormData={setFormData} setIsSubmitted={setIsSubmitted} />}
            />
            <Route 
              path="/submitted" 
              element={<SubmittedDetails formData={formData} setIsSubmitted={setIsSubmitted} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
