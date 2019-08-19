import { addPost } from './post.js';

export const createPost = (e) => {
  e.preventDefault();
  const post = document.getElementById('addPosts').value;
  return addPost(post)
    .then(() => {
      console.log('se añadio correctamente');
    });
};
