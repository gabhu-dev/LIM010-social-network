/* eslint-disable max-len */
export const signUpWithEmail = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const signInEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const signInGoogle = provider => firebase.auth().signInWithRedirect(provider);

export const signInFacebook = provider => firebase.auth().signInWithRedirect(provider);

export const signOut = () => firebase.auth().signOut();

export const verification = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    // eslint-disable-next-line no-console
    console.log('se verifico');
    // Email sent.
  }).catch((error) => {
    // An error happened.
    // eslint-disable-next-line no-console
    console.log(error);
  });
};
