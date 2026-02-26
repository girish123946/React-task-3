import React, { useState } from "react";
import "../App.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    dob: "",
    gender: "",
    qualification: "",
    city: "",
    state: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Registration Successful!");
  };

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />

        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />

        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <input type="tel" name="phone" placeholder="Phone Number" onChange={handleChange} required />

        <input type="text" name="address" placeholder="Address" onChange={handleChange} required />

        <input type="date" name="dob" onChange={handleChange} required />

        <select name="gender" onChange={handleChange} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        <input type="text" name="qualification" placeholder="Qualification" onChange={handleChange} required />

        <input type="text" name="city" placeholder="City" onChange={handleChange} required />

        <input type="text" name="state" placeholder="State" onChange={handleChange} required />

        <button type="submit">Register</button>

      </form>
    </div>
  );
};

export default RegistrationForm;