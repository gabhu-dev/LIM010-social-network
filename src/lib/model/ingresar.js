export const signInEmail = () => {
  const signIn = (email, password) => {
    firebase.auth().signInWithEmailAndPassword(email, password);
  };
};
export const signInGoogle = () => {
  const signInGog = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };
};
export const signInFacebook = () => {
  const signInFb = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    return firebase.auth().signInWithPopup(provider);
  };
};
