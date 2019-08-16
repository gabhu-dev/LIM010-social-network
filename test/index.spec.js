import { signInEmail, signUpWithEmail } from '../src/lib/controller/ingresar.js';

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
