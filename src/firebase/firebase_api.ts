import firebase from './firebase_config';

interface FP {
  email: string;
}

interface REGISTRATION {
  email: string;
  password: string;
}

interface USER {
  name: string;
  age: string;
  address: string;
  company: string;
  designation: string;
  uid: string;
  imageUrl: string;
}

export const SIGNUP = async (signup: REGISTRATION) => {
  try {
    return await firebase
      .auth()
      .createUserWithEmailAndPassword(signup.email, signup.password);
  } catch (error) {
    console.log(error);
    return error.message;
  }
};

export const SIGNIN = async (signin: REGISTRATION) => {
  try {
    return await firebase
      .auth()
      .signInWithEmailAndPassword(signin.email, signin.password);
  } catch (error) {
    console.log(error.message);
    return error.message;
  }
};

export const SIGNOUT = async () => {
  try {
    return await firebase.auth().signOut();
  } catch (error) {
    return error.message;
  }
};

export const FORGOT_PASSWORD = async (forgot: FP) => {
  try {
    const res = await firebase.auth().sendPasswordResetEmail(forgot.email);
    return res;
  } catch (error) {
    return error.message;
  }
};

export const CREATE_USER_PROFILE = async (user: USER) => {
  try {
    const db = firebase.firestore();
    const newUser = {
      uid: user.uid,
      name: user.name,
      age: user.age,
      address: user.address,
      company: user.company,
      designation: user.designation,
      imageUrl: user.imageUrl,
    };
    const res = await db.collection('users').doc(user.uid).set(newUser);
    console.log('res', res);
    return res;
  } catch (error) {
    return error.message;
  }
};
