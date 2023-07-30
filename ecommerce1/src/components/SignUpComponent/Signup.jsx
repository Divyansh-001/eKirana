import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import './Signup.css';
import * as HELPER_FUNCTION from '../HelperFunction';

const Signup = () => {
  const initialValues = { username: '', password: '' };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(HELPER_FUNCTION.validate(formValues));
    setIsSubmit(true);
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <Typography type="h3">Register Here</Typography>
        <TextField
          label="Email"
          color="secondary"
          name="username"
          style={{ marginTop: '2rem' }}
          onChange={handleChange}
        />
        <p style={{ color: '#DB4437' }}>{errors.username}</p>
        <TextField
          label="Password"
          color="secondary"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <p>{errors.password}</p>
        <TextField
          label="Confirm Password"
          color="secondary"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <p style={{ color: '#DB4437' }}>{"Password not matching"}</p>
        <Button variant="outlined" type="submit">
          Submit
        </Button>
        <p>
          Already a User?{' '}
          <Link to="/login">Click here</Link> to login.
        </p>
      </form>
    </div>
  );
};

export default Signup;
