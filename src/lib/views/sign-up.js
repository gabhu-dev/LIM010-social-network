/* eslint-disable no-tabs */
import { signUpWithEmail, verification } from '../controller/ingresar.js';
// eslint-disable-next-line import/no-cycle
import { changeHash } from '../controller/router.js';

export const viewSignUp = () => {
  const formSignUp = document.createElement('section');
  const template = `
  <form class="flex-c center-items size bg-color-white">
		<img src="" alt="">
		<p>Crea tu cuenta y disfruta del contenido</p>
		<input type="email" name="email" placeholder="Email" id="email-signup" class="input-form" required>
    <input type="password" name="password" placeholder="Password" id="password-signup" class="input-form" required>
    <button  class="btn-signup bg-color-blue c-darkblue" id="btn-sign-up">Registrar</button>
    <a href ="#/signin">Volver</a>
    <p class="error" id="msg-warning" ></p>
	</form>`;
  formSignUp.innerHTML = template;
  formSignUp.setAttribute('class', 'bg-color-pink flex-c center-items');
  const btnSignUp = formSignUp.querySelector('#btn-sign-up');
  btnSignUp.addEventListener('click', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    const error = document.querySelector('#msg-warning');
    if (email.length !== 0 && password.length !== 0) {
      if (password.length >= 6) {
        signUpWithEmail(email, password)
          .then(() => {
            error.innerHTML = 'Se le envio un correo de confirmación a su bandeja de entrada';
            verification(email)
              .then(() => {
                changeHash('/signin');
              });
          });
      } else {
        error.innerHTML = 'La contraseña debe ser mayor a 6 caracteres';
      }
    } else {
      error.innerHTML = 'campos vacios';
    }
  });
  return formSignUp;
};
