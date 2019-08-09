/* eslint-disable no-tabs */
import { signUpWithEmail } from '../controller/ingresar.js';

export const viewSignUp = () => {
  const formSignUp = document.createElement('section');
  const template = `
  <form class="flex-c center-items size">
		<img src="" alt="">
		<h1>Crea una cuenta</h1>
		<input type="email" name="email" placeholder="Email" id="email-signup" class="input-form" required>
    <input type="password" name="password" placeholder="Password" id="password-signup" class="input-form" required>
    <button class="btn-signup" id="btn-sign-up">Registrar</button>
    <a href ="#/signin">Volver</a>
    <p class="" id="msg-warning" ></p>
	</form>`;
  formSignUp.innerHTML = template;
  formSignUp.setAttribute('class', 'bg-color-pink');
  const btnSignUp = formSignUp.querySelector('#btn-sign-up');
  btnSignUp.addEventListener('click', () => {
    const email = document.querySelector('#email-signup').value;
    const password = document.querySelector('#password-signup').value;
    signUpWithEmail(email, password);
  });
  return formSignUp;
};
