import React, { useState } from 'react';
import '../../index';
import { base_url } from '../../utils/urls';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LicenseeLogin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit  = async (e) => {
    e.preventDefault();
    // Add form submission logic here

    await axios.post(`${base_url}/auth/licensee/login`, formData)
    .then(
      (response) => {
        if(response.status === 200){
          localStorage.setItem('licensee', JSON.stringify(response.data));
          console.log(response)
          navigate ('/licensee');
        }
        console.log(response)
      }
    ).catch(
      (error) => {
        console.log(error)
      }
    )

  };

  return (
    <div className="login-container-licensee">
      <h1>Licensee Portal - Log In</h1>
      <h2>Permit Patrol</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group-licensee">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Licensee Email Address"
            required
          />
        </div>
        <div className="form-group-licensee">
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit" className="login-button-licensee">Log In</button>
      </form>
      <a href="/forgot-password" className="forgot-password-link-licensee">Forgotten Password?</a>
    </div>
  );
};

export default LicenseeLogin;
