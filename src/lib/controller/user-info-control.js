/* eslint-disable no-console */
export const a = (id) => {
  firebase.firestore().collection('users').doc(id).get()
    .then((doc) => {
      if (doc.exists) {
        const userInfo = document.getElementById('user-info');
        userInfo.innerHTML = `<p class="">${doc.data().Usuario}</p>`;
        userInfo.innerHTML += `<p class="">${doc.data().Correo}</p>`;
        // console.log('Document data:', doc.data().Id);
      } else {
      // doc.data() will be undefined in this case
        console.log('No such document!');
      }
    })
    .catch((error) => {
      console.log('Error getting document:', error);
    });
};
