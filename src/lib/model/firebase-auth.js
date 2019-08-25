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

// export const obtainProfile = () => {
//   const user = firebase.auth().currentUser;
//   let name;
//   let email;
//   let photoUrl;
//   let uid;
//   let emailVerified;

//   if (user != null) {
//     name = user.displayName;
//     email = user.email;
//     photoUrl = user.photoURL;
//     emailVerified = user.emailVerified;
//     uid = user.uid; // The user's ID, unique to the Firebase project. Do NOT use
//     // this value to authenticate with your backend server, if
//     // you have one. Use User.getToken() instead.
//   }
// };
// export const verification = () => {
//   const user = firebase.auth().currentUser;
//   user.sendEmailVerification().then(() => {
//     // eslint-disable-next-line no-console
//     console.log('se verifico');
//     // Email sent.
//   }).catch(() => {
//     // An error happened.
//     // console.log(error);
//   });
// };
