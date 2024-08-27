import React, { useState } from 'react';
import './App.css';

const RegisterForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  // const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log('Form submitted!');
    console.log(`First name: ${firstName}`);
    console.log(`Last name: ${lastName}`);
    console.log(`Email: ${email}`);
    // console.log(`Agreed to terms: ${agreedToTerms}`);
  };

  return (
    <>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    <div className="header">
      <h3>&lt;</h3>
      <h3>Create Account</h3>
      <i class="fa fa-bell"></i>
      <i class="fa fa-trash"></i>
    </div>

    <form onSubmit={handleSubmit} className="register-form">
      <h1>Register</h1>
      <div className="social-login">
        <button className="social-button twitter">
          <a href="https://twitter.com " ><i class="fa fa-twitter"></i></a>
        </button>
        <button className="social-button google">
          <a href="https://google.com"><i class="fa fa-google"></i></a>
        </button>
        <button className="social-button facebook">
          <a href="https://facebook.com"><i class="fa fa-facebook"></i></a>
        </button>
      </div>
      <center><p>or be classical</p></center>
      <div className="form-group">
        <input type="text" id="firstName" placeholder='First Name...' value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
      </div>
      <div className="form-group">
        <input type="text" id="lastName" placeholder='Last Name...' value={lastName} onChange={(e) => setLastName(e.target.value)}/>
      </div>
      <div className="form-group">
        <input type="email" id="email" placeholder='Your Email...' value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className="form-group">
        {/* <input type="checkbox" className="checkbox" id="terms" checked={agreedToTerms} onChange={() => setAgreedToTerms(!agreedToTerms)}/> */}
        <p style={{ display: 'inline' }}>&#9634;</p><p style={{ display: 'inline' }}> I agree to the terms and conditions.</p>
      </div>
      <button type="submit" className="submit-button">
        Get Started
      </button>
    </form>
    </>
  );
};

export default RegisterForm;