import React, { FormEvent, useState } from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  Container,
  CircularProgress,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import firebase from '../../firebase/firebase_config';
import { CREATE_USER_PROFILE } from '../../firebase/firebase_api';
const AdditionalInfo = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [designation, setDesignation] = useState('');
  const [address, setAddress] = useState('');
  const [company, setCompany] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isPick, setPick] = useState(false);
  const [loader, setLoader] = useState(false);
  const history = useHistory();
  const handleSubmit = async (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    const { uid } = await firebase.auth().currentUser;
    if (uid) {
      const res = await CREATE_USER_PROFILE({
        uid,
        name,
        age,
        address,
        company,
        designation,
        imageUrl,
      });
      console.log('res', res);
      history.push('/');
    }
  };
  const imageOnChange = async (evt: React.ChangeEvent<HTMLInputElement>) => {
    evt.preventDefault();
    setLoader(true);
    const file = evt.target.files[0];
    const fireRef = firebase.storage().ref();
    const fileRef = fireRef.child(file.name);
    await fileRef.put(file);
    const finalUrl = await fileRef.getDownloadURL();
    setImageUrl(finalUrl);
    setPick(true);
    setLoader(false);
  };

  return (
    <div>
      <Container component='main' maxWidth='xs'>
        <div>
          <Typography component='h1' variant='h5'>
            Additional Info
          </Typography>
          {loader && <CircularProgress />}
          <div className='image-upload'>
            <label htmlFor='file-input'>
              {isPick ? (
                <img
                  src={imageUrl}
                  style={{ width: '100px', height: '100px' }}
                />
              ) : (
                <img
                  src='https://placehold.it/100/000000/ffffff?text=UPLOAD'
                  style={{ cursor: 'pointer' }}
                />
              )}
            </label>

            <input
              id='file-input'
              type='file'
              style={{ display: 'none' }}
              onChange={imageOnChange}
            />
          </div>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name='name'
                  variant='outlined'
                  required
                  fullWidth
                  label='Name'
                  autoFocus
                  onChange={(e) => setName(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  label='Age'
                  name='age'
                  type='number'
                  onChange={(e) => setAge(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='address'
                  label='Address'
                  type='text'
                  autoComplete='off'
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='company'
                  label='Company'
                  type='text'
                  onChange={(e) => setCompany(e.target.value)}
                  autoComplete='off'
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant='outlined'
                  required
                  fullWidth
                  name='designation'
                  label='Designation'
                  type='text'
                  autoComplete='off'
                  onChange={(e) => setDesignation(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button type='submit' fullWidth variant='contained' color='primary'>
              Profile Done
            </Button>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
