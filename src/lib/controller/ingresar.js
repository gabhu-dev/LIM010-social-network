/* eslint-disable no-console */

export const signUpWithEmail = (email, password) => {
  const createEmail = firebase.auth().createUserWithEmailAndPassword(email, password);
  return createEmail;
};

export const signInEmail = (email, password) => {
  const signIn = firebase.auth().signInWithEmailAndPassword(email, password);
  return signIn;
};

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
};
export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithRedirect(provider);
};

// export const signOut = () => {
//   firebase.auth().signOut().then(() => {
//   })
//   .catch((error) => {
//     });
// };

export const verification = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    // eslint-disable-next-line no-console
    console.log('se verifico');
    // Email sent.
  }).catch((error) => {
    // An error happened.
    console.log(error);
  });
};
