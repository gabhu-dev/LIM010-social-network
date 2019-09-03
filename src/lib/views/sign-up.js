/* eslint-disable no-tabs */
import { signUp } from '../controller/sign-up-control.js';

export default () => {
  const formSignUp = document.createElement('div');
  const template = `
  <div class="banner bnsu-image two-col center-items">
  </div>
  <form class="flex-c center-items two-col">
    <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo" alt="logo hey! hallyu">
    <p class="saludo">Crea una cuenta y disfruta!</p>
    <input type="text" name="nickname" placeholder=" &#128100; Usuario" id="nickname" class="input-form pink" required focus >
		<input type="email" name="email" placeholder=" &#128100; Correo Electrónico" id="email-signup" class="input-form pink" required focus>
    <input type="password" name="password" placeholder=" &#128274; Contraseña" id="password-signup" class="input-form pink" required>
    <button  class="btn-signup bg-color-blue c-darkblue" id="btn-sign-up">Registrar</button>
    <p class="error" id="msg-warning" ></p>
  </form>`;

  formSignUp.innerHTML = template;
  formSignUp.setAttribute('class', 'bg-color-pink flex-r size center-items');

  const btnSignUp = formSignUp.querySelector('#btn-sign-up');
  btnSignUp.addEventListener('click', signUp);

  return formSignUp;
};
