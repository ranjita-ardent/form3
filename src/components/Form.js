import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // To navigate after form submission

const Form = ({ setFormData, setIsSubmitted }) => {
  const [form, setForm] = useState({
    username: '',
    email: '',
    phoneNumber: '',
    gender: '',
    personalId: '',
    date: '',
    text: '',
    option: ''
  });

  const navigate = useNavigate(); // Hook to navigate after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;

    // If the field is phoneNumber, we only allow numeric values
    if (name === 'phoneNumber') {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value.replace(/\D/g, '') // Remove non-numeric characters
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if all fields are filled out
    if (
      !form.username ||
      !form.email ||
      !form.phoneNumber ||
      !form.gender ||
      !form.personalId ||
      !form.date ||
      !form.text ||
      !form.option
    ) {
      alert('Please fill in all the details.');
      return;
    }

    setFormData(form); // Store form data in App component
    setIsSubmitted(true); // Update submission status
    navigate('/submitted'); // Navigate to the submitted page
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-field">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter email or username"
        />
      </div>

      <div className="input-field">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />
      </div>

      <div className="input-field">
        <label>Phone Number</label>
      <div class="contact-num">
        <input
          type="tel"
          name="phoneNumber"
          id="phone"
          value={form.phoneNumber}
          onChange={handleChange}
          placeholder="Enter phone number"
          maxLength={10} // Allow only up to 10 digits
        />
        <button type="button" className="verify-button">Verify</button>
        </div>
      </div>

      <div className="input-field">
        <label>Personal ID Number</label>
        <input
          type="number"
          name="personalId"
          value={form.personalId}
          onChange={handleChange}
          placeholder="Enter personal ID"
        />
      </div>

      <div className="input-field gender-container">
        <div className="gender-options">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={form.gender === 'male'}
              onChange={handleChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={form.gender === 'female'}
              onChange={handleChange}
            />
            Female
          </label>

          <div className="toggle-switch">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
          
        </div>
      </div>

      <div className="input-field">
        <label>Write Anything</label>
        <input
          type="text"
          name="text"
          value={form.text}
          onChange={handleChange}
          placeholder="Enter your text here"
        />
      </div>

      <div className="input-field">
        <label>Select an option below</label>
        <select
          name="option"
          value={form.option}
          onChange={handleChange}
        >
          <option value="">Select Options</option>
          <option value="sdd">SDD</option>
          <option value="sda">SDA</option>
        </select>
      </div>

      <div className="input-field">
        <label htmlFor="date">Choose a Date</label>
        <div className="date-input-wrapper">
          <input
            type="date"
            name="date"
            id="date"
            value={form.date}
            onChange={handleChange}
            required 
          />
          {/* Show the placeholder only when the date input is empty */}
          {form.date === "" && (
            <span className="date-placeholder">Select Date</span>
          )}
        </div>
      </div>

      <div className="checkbox-label">
        <input type="checkbox" />
        <label>
          In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface.
        </label>
      </div>

      <div className="form-actions">
        <button className="form-button" type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;
