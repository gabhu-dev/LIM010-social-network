// // import MockFirebase from 'mock-cloud-firestore';
// // import { createUser } from '../src/lib/controller/users-profile';
// // import { getPost } from '../src/lib/model/firebase-db.js';

const fixtureUsers = {
  _collection_: {
    _doc_: {
      user123: {
        Usuario: 'gabriela',
        Correo: 'gabhu@hotmail.com',
        Id: 'user123',
        Photo: 'gaby.jpg',
      },
      user124: {
        Usuario: 'sara',
        Correo: 'sara@hotmail.com',
        Id: 'user124',
        Photo: 'sara.jpg',
      },
    },
  },
};
global.firebase = new MockFirebase(fixtureUsers, { isNaiveSnapshotListenerEnabled: true });

describe('lista de usuarios', () => {
eslint-disable-next-line max-len
  it('Debería poder agregar un usuario', done => createUser('Elizabeth', 'eli@hotmail.com', 'user136', 'eliza.jpg')
    .then(() => getPost(
      (data) => {
        const result = data.find(elemento => elemento.user === 'Elizabeth');
        expect(result.user).toBe('Elizabeth');
        done();
      },
    )));
});
