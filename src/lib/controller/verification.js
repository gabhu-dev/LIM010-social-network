export const verification = () => {
  const user = firebase.auth().currentUser;
  user.sendEmailVerification().then(() => {
    // Email sent.
  });
};
