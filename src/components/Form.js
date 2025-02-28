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
    option: '',
    checkbox: false, // Add checkbox state
  });

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    phoneNumber: false,
    gender: false,
    personalId: false,
    date: false, // Check if the date field is empty
    text: false,
    option: false,
    checkbox: false, // Track checkbox error
  });

  const navigate = useNavigate(); // Hook to navigate after form submission

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'phoneNumber') {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value.replace(/\D/g, '') // Remove non-numeric characters
      }));
    } else if (name === 'gender') {
      setForm((prevForm) => ({
        ...prevForm,
        gender: value // Set the gender state properly when a radio button is selected
      }));
    } else if (name === 'checkbox') {
      setForm((prevForm) => ({
        ...prevForm,
        checkbox: e.target.checked // Update checkbox state
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

    // Validate all fields and update the errors state
    const newErrors = {
      username: !form.username,
      email: !form.email,
      phoneNumber: !form.phoneNumber,
      gender: !form.gender,
      personalId: !form.personalId,
      date: !form.date,
      text: !form.text,
      option: !form.option,
      checkbox: !form.checkbox, // Add checkbox validation
    };

    // Set errors to true for all empty fields
    setErrors(newErrors);

    // If there are any errors, don't submit the form
    if (Object.values(newErrors).includes(true)) {
      return;
    }

    // If no errors, proceed with form submission
    setFormData(form); // Store form data in App component
    setIsSubmitted(true); // Update submission status
    navigate('/submitted'); // Navigate to the submitted page
  };

  const handleDateChange = (e) => {
    setForm({ ...form, date: e.target.value });
  };

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <div className="input-field">
        <label style={{ color: errors.username ? 'red' : 'initial' }}>Username</label>
        <input
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder="Enter email or username"
          style={{ borderColor: errors.username ? 'red' : 'initial' }}
        />
      </div>

      <div className="input-field">
        <label style={{ color: errors.email ? 'red' : 'initial' }}>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Enter your email"
          style={{ borderColor: errors.email ? 'red' : 'initial' }}
        />
      </div>

      <div className="input-field">
        <label style={{ color: errors.phoneNumber ? 'red' : 'initial' }}>Phone Number</label>
        <div className="contact-num">
          <input
            type="tel"
            name="phoneNumber"
            id="phone"
            value={form.phoneNumber}
            onChange={handleChange}
            placeholder="Enter phone number"
            maxLength={10} // Allow only up to 10 digits
            style={{ borderColor: errors.phoneNumber ? 'red' : 'initial' }}
          />
          <button type="button" className="verify-button">Verify</button>
        </div>
      </div>

      <div className="input-field">
        <label style={{ color: errors.personalId ? 'red' : 'initial' }}>Personal ID Number</label>
        <input
          type="number"
          name="personalId"
          value={form.personalId}
          onChange={handleChange}
          placeholder="Enter personal ID"
          style={{ borderColor: errors.personalId ? 'red' : 'initial' }}
        />
      </div>

      <div className="input-field gender-container">
        <div className="gender-options" style={{ color: errors.text ? 'red' : 'initial' }}>
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
        <label style={{ color: errors.text ? 'red' : 'initial' }}>Write Anything</label>
        <input
          type="text"
          name="text"
          value={form.text}
          onChange={handleChange}
          placeholder="Enter your text here"
          style={{ borderColor: errors.text ? 'red' : 'initial' }}
        />
      </div>

      <div className="input-field">
        <label style={{ color: errors.option ? 'red' : 'initial' }}>Select an option below</label>
        <select
          name="option"
          value={form.option}
          onChange={handleChange}
          style={{ borderColor: errors.option ? 'red' : 'initial' }}
        >
          <option value="">Select Options</option>
          <option value="sdd">SDD</option>
          <option value="sda">SDA</option>
        </select>
      </div>

      {/* Date Picker Field */}
      <div className="input-field">
        <label htmlFor="dateInput">Choose a date</label><br />
        <input
          type="date"
          placeholder="Select Date"
          id="dateInput"
          name="dateInput"
          value={form.date}
          onChange={handleDateChange}
          required
          style={{ borderColor: errors.date ? 'red' : 'initial' }}
        />
      </div>

      <div className="checkbox-label">
        <input
          type="checkbox"
          name="checkbox"
          checked={form.checkbox}
          onChange={handleChange}
        />
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
