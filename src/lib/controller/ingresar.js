import { verification } from './verification.js';

export const signUpWithEmail = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then(() => {
      verification();
    });
};

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // console.log('usuario existe');
    const displayName = user.displayName;
    const email = user.email;
    const emailVerified = user.emailVerified;
    const photoURL = user.photoURL;
    const isAnonymous = user.isAnonymous;
    const uid = user.uid;
    const providerData = user.providerData;
    let textVerified = '';
    if (emailVerified === false) {
      textVerified = 'email no verificado';
    } else {
      textVerified = 'email verificado';
    }
  } else {
    console.log('usuario no existe');
  }
});
export const signInEmail = (email, password) => {
  // console.log('ya te loguease');
  firebase.auth().signInWithEmailAndPassword(email, password);
};
export const signInGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  return firebase.auth().signInWithPopup(provider);
  // .then((result) => {
  // console.log(result.user);
  // document.getElementById('foto').append(`<img src'${result.user.photoURL}'/>`);
  // });
};
export const signInFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider();
  return firebase.auth().signInWithPopup(provider);
};

// export const signOut = () => {
//   firebase.auth().signOut().then(() => {})
//     .catch((error) => {});
// };
