
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

// export const profileUser = (userName) => {
//   firebase.auth().onAuthStateChanged((user) => {
//     if (user) {
//       const displayName = `<p class="">${user.displayName}</p>`;
//       const userPhoto = `<img src="${user.photoURL}" class="profile-photo">`;
//       const userEmail = `<p class="">${user.email}</p>`;
//       userName.innerHTML = displayName;
//       userName.innerHTML += userPhoto;
//       userName.innerHTML += userEmail;
//     }
//   });
//   // console.log(firebase.firestore().collection('users'));
//   firebase.firestore().collection('users').where('Id', '==', true)
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         // doc.data() is never undefined for query doc snapshots
//         console.log(doc.id, ' => ', doc.data(Id));
//       });
//     })
//     .catch((error) => {
//       console.log('Error getting documents: ', error);
//     });
// };

