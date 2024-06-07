import React, { useState } from 'react';
import '../../index';
import { base_url } from '../../utils/urls';
import axios from 'axios';

const LicenseeSignUp = () => {
  const [formData, setFormData] = useState({
    licenseefirstName: '',
    licenseeSurname: '',
    licenseeEmail: '',
    licenseePassword: '',
    licenseenicNumber: '',
    licenseecontactNumber: '',
    licenseeAddress: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios.post(`${base_url}/auth/licensee/signup`, formData)
    .then(
      (response) => {
        console.log(response)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )

    
    //form logic

    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let newValue = value;
    if (name === 'licenseenicNumber') {
      // Remove any non-numeric characters except 'V'
      newValue = value.replace(/[^0-9V]/g, '');
    }
    setFormData({
      ...formData,
      [name]: newValue
    });
  };

  return (
    <div className="signup-container-licensee">
      <h1>Licensee Portal - Sign Up</h1>
      <h2>Permit Patrol</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-licensee">
          <input
            type="text"
            name="licenseefirstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            name="licenseeSurname"
            value={formData.surname}
            onChange={handleChange}
            placeholder="Surname"
            required
          />
        </div>
        <div className="form-group-licensee">
          <input
            type="email"
            name="licenseeEmail"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
          />
        </div>
        <div className="form-group-licensee">
          <input
            type="password"
            name="licenseePassword"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <div className="form-group-licensee">
          <input
            type="text"
            name="licenseenicNumber"
            value={formData.nicNumber}
            onChange={handleInputChange}
            placeholder="National Identity Card (NIC) Number"
            required
          />
        </div>
        <div className="form-group-licensee">
          <input
            type="text"
            name="licenseecontactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            placeholder="Contact Number"
            required
          />
        </div>
        <div className="form-group-licensee">
          <textarea
            name="licenseeAddress"
            value={formData.address}
            onChange={handleChange}
            placeholder="Personal Address"
            required
          />
        </div>
        <button type="submit" className="signup-button-licensee">Sign Up</button>
      </form>
    </div>
  );
};

export default LicenseeSignUp;
