import {
  signInEmail,
  signInGoogle,
  signInFacebook,
  signUpWithEmail,
} from './ingresar.js';

export const signInwithEmail = () => {
  const emailSignIn = document.querySelector('#email-signin').value;
  const passwordSignIn = document.querySelector('#password-signin').value;
  signInEmail(emailSignIn, passwordSignIn);
};
export const signInWithGoogle = () => {
  signInGoogle();
};

export const signInWithFacebook = () => {
  signInFacebook();
};

export const signUp = () => {
  const emailSignUp = document.querySelector('#email-signup').value;
  const passwordSignUp = document.querySelector('#password-signup').value;
  signUpWithEmail(emailSignUp, passwordSignUp);
};
