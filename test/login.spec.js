import {
  signInEmail,
  signUpWithEmail,
  signInGoogle,
  signInFacebook,
  signOut,
  currentUser,
} from '../src/lib/model/firebase-auth.js';

// configuracion de mock de firebase
const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockFirebase();
const mockdatabase = new firebasemock.MockFirebase();
mockauth.autoFlush();

global.firebase = firebasemock.MockFirebaseSdk(
  // use null if your code does not use RTDB
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
);

describe('registro', () => {
  it('Deberia poder registrarse', () => signUpWithEmail('laboratoria@lab.com', '123456789')
    .then((user) => {
      expect(user.email).toBe('laboratoria@lab.com');
    }));
});
describe('inicio de sesion', () => {
  it('Debería poder iniciar sesion', () => signInEmail('laboratoria@hotmail.la', '123456')
    .then((user) => {
      expect(user.email).toBe('laboratoria@hotmail.la');
    }));
});
describe('login con google', () => {
  it('Debería poder loguearse con google', () => signInGoogle('gabymir2k@gmail.com')
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('google.com');
    }));
});

describe('login con facebook', () => {
  it('Debería poder loguearse con facebook', () => signInFacebook('gabhu@hotmail.es')
    .then((user) => {
      expect(user.providerData[0].providerId).toBe('facebook.com');
    }));
});
describe('cerrar sesion', () => {
  it('deberia cerrar sesion', (done) => {
    signInEmail('laboratoria@hotmail.la', '123456')
      .then(() => {
        signOut()
          .then((response) => {
            expect(response).toBe(undefined);
            done();
          });
      });
  });
});


describe('current user', () => {
  it('debería devolver usuario con sesión activa', () => signInEmail('laboratoria@gmail.com', '123456').then(() => {
    const user = currentUser();
    expect(user.email).toBe('laboratoria@gmail.com');
  }));
});
