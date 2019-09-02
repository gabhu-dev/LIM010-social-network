/* eslint-disable no-console */
import MockFirebase from 'mock-cloud-firestore';
import {
  addPost, getPost, deletePost, editPost,
} from '../src/lib/model/firebase-db.js';

const fixtureData = {
  __collection__: {
    posts: {
      __doc__: {
        abc123: {
          post: 'yo veo doramas en dramafever',
          idUser: 123456,
          user: 'gabriela',
          email: 'gabhu@hotmail.es',
          privacity: 'publico',
          like: 1,
        },
        abc124: {
          post: 'oh hayllu ,me encanta',
          idUser: 789101,
          user: 'sara',
          email: 'sabsusu@hotmail.com',
          privacity: 'privado',
          like: 0,
        },
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureData, { isNaiveSnapshotListenerEnabled: true });

describe('lista de posts', () => {
  it('Debería poder agregar un post', done => addPost('me gustan doramas', 121314, 'rita', 'rita@hotmail.com', 'public', 1)
    .then(() => getPost(
      (data) => {
        const result = data.find(posts => posts.post === 'me gustan doramas');
        expect(result.post).toBe('me gustan doramas');
        done();
      },
    )));
});

describe('delete post', () => {
  it('Debería poder eliminar el post con el id: abc124', done => deletePost('abc124')
    .then(() => getPost(
      (data) => {
        const result = data.find(posts => posts.id === 'abc124');
        expect(result).toBe(undefined);
        done();
      },
    )));
});

describe('edit post', () => {
  it('Debería poder editar post con id:abc123', done => editPost('abc123', '¿qué dorama miro?')
    .then(() => getPost(
      (data) => {
        const result = data.find(posts => posts.post === '¿qué dorama miro?');
        expect(result.post).toBe('¿qué dorama miro?');
        done();
      },
    )));
});
