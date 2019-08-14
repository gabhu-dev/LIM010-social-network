/* eslint-disable no-tabs */
import { signUpWithEmail, verification } from '../controller/ingresar.js';
// eslint-disable-next-line import/no-cycle
import { changeHash } from '../controller/router.js';

export const viewSignUp = () => {
  const formSignUp = document.createElement('section');
  const template = `
  <form class="flex-c center-items size bg-color-white">
    <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo" alt="logo hey! hallyu">
    <p>Crea tu cuenta y disfruta del contenido</p>
    <input type="text" name="nickname" placeholder=" &#128100; Usuario" id="nickname" class="input-form pink" required focus >
		<input type="email" name="email" placeholder=" &#128100; Correo Electrónico" id="email-signup" class="input-form pink" required focus>
    <input type="password" name="password" placeholder=" &#128274; Contraseña" id="password-signup" class="input-form pink" required>
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
            error.innerHTML = 'Se le envio un correo de confirmación a su correo dado &#9993;';
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
