import React, { useState, FormEvent } from 'react';
import { Typography, TextField, Button, Container } from '@material-ui/core';
import { FORGOT_PASSWORD } from '../../firebase/firebase_api';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const res = await FORGOT_PASSWORD({ email });
    alert('email send successfully');
  };
  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <div>
          <Typography component='h1' variant='h5'>
            Password Reset
          </Typography>
          <p>Please Enter Your Email</p>
          <form onSubmit={handleSubmit} noValidate>
            <TextField
              variant='outlined'
              margin='normal'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoFocus
              onChange={(e) => setEmail(e.target.value)}
            />

            <Button type='submit' fullWidth variant='contained' color='primary'>
              Send
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ForgotPassword;
