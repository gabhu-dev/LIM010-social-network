import { addPost } from './post.js';

export const createPost = (e) => {
  e.preventDefault();
  const post = document.getElementById('addPosts').value;
  return addPost(post)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('se añadio correctamente');
    });
};
