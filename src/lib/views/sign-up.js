/* eslint-disable no-tabs */
import { signUpWithEmail } from '../controller/ingresar.js';

export const viewSignUp = () => {
  const formSignUp = document.createElement('form');
  const template = `<section class="flex-c center-items size bg-color-pink">
    <img src="" alt="">
    <h1>Crea una cuenta</h1>
    <input type="email" name="email" placeholder="Email" id="email-signup" class="input-form" required>
    <input type="password" name="password" placeholder="Password" id="password-signup" class="input-form" required>
    <button class="btn-signup" id="btn-sign-up">Registrar</button>
    <a href ="#/signin">Volver</a>
    <p class="" id="msg-warning" ></p>
	</section>`;
  formSignUp.innerHTML = template;
  const btnSignUp = formSignUp.querySelector('#btn-sign-up');
  btnSignUp.addEventListener('click', () => {
    signUpWithEmail();
  });
  return formSignUp;
};
