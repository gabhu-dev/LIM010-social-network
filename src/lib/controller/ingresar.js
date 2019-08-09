export const signInEmail = (email, password) => {
  console.log('ya te loguease');
  firebase.auth().signInWithEmailAndPassword(email, password);
};
export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};
export const signUpWithEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password);
};
