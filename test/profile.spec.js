import MockFirebase from 'mock-cloud-firestore';
import { createUser, obtainCollectionUsers } from '../src/lib/model/firebase-db.js';

const fixtureUsers = {
  _collection_: {
    _users_: {
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
  },
};
global.firebase = new MockFirebase(fixtureUsers, { isNaiveSnapshotListenerEnabled: true });

describe('la coleccion de usuarios', () => {
  it('Deberia poder añadir un usuario', () => createUser('Elizabeth', 'eli@hotmail.com', 'user125', 'eli.jpg')
    .then(() => {
      obtainCollectionUsers('user125')
        .then((Usuario) => {
          expect(Usuario).toBe('Elizabeth');
        });
    }));
});
