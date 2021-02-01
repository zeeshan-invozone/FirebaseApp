import React, { FormEvent, useState } from 'react';
import { SIGNUP } from '../../firebase/firebase_api';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(email, password);
    const res = await SIGNUP({ email, password });
    history.push('/step-2');
  };
  return (
    <Container component='main' maxWidth='xs'>
      <div>
        <Typography component='h1' variant='h5'>
          Sign up
        </Typography>
        <form onSubmit={handleSubmit} noValidate autoComplete='off'>
          <TextField
            autoComplete='off'
            name='name'
            variant='outlined'
            required
            fullWidth
            id='name'
            label='Name'
            autoFocus
            margin='normal'
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            id='email'
            label='Email Address'
            name='email'
            autoComplete='off'
            autoFocus
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            variant='outlined'
            margin='normal'
            required
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='off'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type='submit' fullWidth variant='contained' color='primary'>
            Sign Up
          </Button>
          <Grid container justify='flex-end'>
            <Grid item>
              {/* <Link to='/login' variant='body2'>
                Already have an account? Sign in
              </Link> */}
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
