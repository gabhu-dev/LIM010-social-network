import { savePost } from './post.js';

export const addPost = (e) => {
  e.preventDefault();
  const post = document.getElementById('text-post').value;
  return savePost(post)
    .then(() => {
      // eslint-disable-next-line no-console
      console.log('se añadio correctamente');
    });
};
