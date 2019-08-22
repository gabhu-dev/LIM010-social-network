// leer post
const showPost = () => {
  const tabla = document.getElementById('show-post');
  firebase.firestore().collection('Post').onSnapshot((querySnapshot) => {
    tabla.innerHTML = '';
    querySnapshot.forEach((doc) => {
      tabla.innerHTML += `<label class="flex-c post-label bg-color-pink">
                            <div class="post flex-c c-darkblue">${doc.data().Post}</div>
                            <button type="button" id="${doc.id}">X</button>
                            <button type="button" id="${doc.id}">Editar</button>
                            <p>${doc.data().Status}</p>
                          </label>`;
    });
  });
  return tabla;
};

// crear post
export const addPost = () => {
  const post = document.getElementById('text-post').value;
  const status = document.getElementById('status').value;
  firebase.firestore().collection('Post').add({
    Post: post,
    Status: status,
    timePost: (new Date()).toLocaleDateString(),
  })
    .then((docRef) => {
      console.log('Document written with ID: ', docRef.id);
      document.getElementById('text-post').value = '';
      showPost();
    })
    .catch((error) => {
      console.error('Error adding document: ', error);
    });
};

// eliminar
const deletePost = (id) => {
  firebase.firestore().collection('Post').doc(id).delete()
    .then(() => {
      console.log('Document successfully deleted!');
    })
    .catch((error) => {
      console.error('Error removing document: ', error);
    });
};
