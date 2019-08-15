// importamos la funcion que vamos a testear
// eslint-disable-next-line import/no-unresolved
// import { myFunction } from '../src/lib/index';

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof myFunction).toBe('function');
//   });
// })
import { signInEmail } from '../src/lib/controller/ingresar.js';

const firebasemock = require('firebase-mock');

const mockauth = new firebasemock.MockAuthentication();
const mockdatabase = new firebasemock.MockFirebase();

global.firebase = firebasemock.MockFirebaseSdk(
  path => (path ? mockdatabase.child(path) : null),
  () => mockauth,
);

// describe('registro', () => {
//   it('Deberia poder registrarse', () => signUpWithEmail('laboratoria@lab.com', '123456789')
//     .then((additionalUserInfo) => {
//       expect(additionalUserInfo.isNewUser).toBe('true');
//     }));
// });
describe('Iniciar Sesión', () => {
  it('Debería iniciar sesion', () => signInEmail('kmontezam@gmail.com', '123456')
    .then((user) => {
      expect(user.email).toBe('kmontezam@gmail.com');
    }));
});
