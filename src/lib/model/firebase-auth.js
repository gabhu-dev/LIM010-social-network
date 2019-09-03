/* eslint-disable max-len */
export const signUpWithEmail = (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password);

export const signInEmail = (email, password) => firebase.auth().signInWithEmailAndPassword(email, password);

export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

export const signOut = () => firebase.auth().signOut();

export const currentUser = () => firebase.auth().currentUser;
