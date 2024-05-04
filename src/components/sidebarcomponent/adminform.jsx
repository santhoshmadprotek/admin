import React, { useState } from 'react';
import { TextField, Button, Grid, Typography,FormControlLabel,Checkbox } from '@mui/material';
import { Navigate, useNavigate } from 'react-router-dom';
import Header from '../Header';

const AdminProfileForm = () => {
    const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      otp: '',
      generatedOTP: '',
    });

    const history = useNavigate();

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      // Generate and send OTP
      const generatedOTP = Math.floor(100000 + Math.random() * 900000);
      setFormData({ ...formData, generatedOTP });
      // Send OTP to user's email or phone number
      // Here, you can implement your logic to send OTP
      console.log('Generated OTP:', generatedOTP);
      // Show alert message
      alert('OTP sent to your email or phone number!');
    };

    const handleOTPValidation = () => {
      // Validate OTP
      if (formData.otp === formData.generatedOTP) {
        // Redirect to profile page
        Navigate.push('/profile');
      } else {
        alert('Invalid OTP! Please try again.');
      }
    };

    return (
      <div>
      <Header />
      <form onSubmit={handleSubmit} style={{ padding: '80px' }}>
        <Grid  container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h5" gutterBottom>
              Create Admin Profile
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </Grid>

          <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Phone Number"
                        name="phoneNumber"
                        type="tel"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                    />
                </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Create new password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          
          <Grid item xs={12}>
                    <FormControlLabel
                        control={<Checkbox checked={formData.role} onChange={handleChange} name="role" />}
                        label="Admin"
                    />
                     <FormControlLabel
                            control={<Checkbox checked={formData.termsChecked} onChange={handleChange} name="termsChecked" />}
                            label="I have agreed to all terms and condition"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={formData.privacyChecked} onChange={handleChange} name="privacyChecked" />}
                            label="I have agreed to all privacy policy"
                        />
                </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              Generate OTP
            </Button>
          </Grid>
          {formData.generatedOTP && (
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Enter OTP"
                name="otp"
                value={formData.otp}
                onChange={handleChange}
              />
            </Grid>
          )}



          {formData.generatedOTP && (
            <Grid item xs={12}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                onClick={handleOTPValidation}
              >
                create profile
              </Button>
            </Grid>
          )}
        </Grid>
      </form>
      </div>
    );
};

export default AdminProfileForm;
