/* eslint-disable no-console */
import MockFirebase from 'mock-cloud-firestore';
import {
  addPost,
  getPost,
  deletePost,
  editPost,
  addComment,
  readComments,
  deleteComment,
  editComment,
  editLikes,
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
          likes: 1,
          __collection__: {
            comments: {
              __doc__: {
                Cbc123: {
                  comment: 'me gusta tu post',
                  email: 'sabsusu@hotmail.com',
                  idPost: 'abc123',
                  idUser: ' abc124',
                },
              },
            },
          },
        },
        abc124: {
          post: 'oh hayllu ,me encanta',
          idUser: 789101,
          user: 'sara',
          email: 'sabsusu@hotmail.com',
          privacity: 'privado',
          likes: 0,
          __collection__: {
            comments: {
              __doc__: {
                Cbc124: {
                  comment: 'oh a mi tambien',
                  email: 'gabhu@hotmail.es',
                  idPost: ' abc124',
                  idUser: 'abc123',
                },
              },
            },
          },
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
  it('Debería poder editar post con id:abc123', done => editPost('abc123', '¿qué dorama miro?', 'privado')
    .then(() => getPost(
      (data) => {
        const result = data.find(posts => posts.post === '¿qué dorama miro?');
        expect(result.post).toBe('¿qué dorama miro?');
        done();
      },
    )));
});


describe('lista de comentarios', () => {
  it('Debería poder agregar un comentario dentro de la subcoleccion comments', done => addComment('me gustan tus posts', 'gabhu@hotmail.es', 'abc124', ' 123456')
    .then(() => readComments('abc124',
      (data) => {
        const result = data.find(comments => comments.comment === 'me gustan tus posts');
        expect(result.comment).toBe('me gustan tus posts');
        done();
      })));
});

describe('delete comment', () => {
  it('Debería poder eliminar el comentario con el id: Cbc124', done => deleteComment(' abc124', 'Cbc124')
    .then(() => readComments('abc124',
      (data) => {
        const result = data.find(comments => comments.id === ' Cbc124');
        expect(result).toBe(undefined);
        done();
      })));
});

describe('edit comment', () => {
  it('Debería poder editar el comentario con el id: Cbc123', done => editComment('abc123', 'Cbc123', 'a mi no me gustan')
    .then(() => readComments('abc123',
      (data) => {
        const result = data.find(comments => comments.comment === 'a mi no me gustan');
        expect(result.comment).toBe('a mi no me gustan');
        done();
      })));
});

describe('edit like', () => {
  it('Debería poder cambiar likes en el post con id:abc123', done => editLikes('abc123', 2)
    .then(() => getPost(
      (data) => {
        const result = data.find(posts => posts.likes === 2);
        expect(result.likes).toBe(2);
        done();
      },
    )));
});
