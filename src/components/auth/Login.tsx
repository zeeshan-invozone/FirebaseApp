import React, { FormEvent, useState, useContext } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Container,
} from '@material-ui/core';
import { Link, Redirect } from 'react-router-dom';
import { AuthContext } from '../../hooks/Authentication';
import { SIGNIN } from '../../firebase/firebase_api';
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    console.log(email, password);
    await SIGNIN({ email, password });
  };
  const { currentUser } = useContext(AuthContext);
  console.log('currentUser1', currentUser);
  if (currentUser) {
    return <Redirect to='/' />;
  }
  return (
    <Container component='main' maxWidth='xs'>
      <div>
        <Typography component='h1' variant='h5'>
          Sign in
        </Typography>
        <form noValidate onSubmit={handleSubmit}>
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
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link to='/forgot-password' variant='body2'>
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/sign-up' variant='body2'>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

export default Login;
