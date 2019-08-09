/* eslint-disable no-tabs */
import { signInEmail, signInGoogle, signInFacebook } from '../controller/ingresar.js';

export const viewSignIn = () => {
  const formSignIn = document.createElement('section');
  const template = `<section id="log-in" class="flex-c center-items size bg-color-blue">
                      <p>Aqui va la imagen</p>
											<p>Se da la bienvenida</p>
											<form name="login-form">
                        <input type="email" name="email" placeholder="Email" id="email-signin" class="input-form flex-c" required>
                        <input type="password" name="password" placeholder="Password" id="password-signin" class="input-form flex-c" required>
												<input type="button" name="log-in" value="Log in" id="btn-login" class="btn-signin flex-c">
												<p>O bien ingresa con</p>
												<input type="button" name="" value="Facebook" id="login-fb">
												<input type="button" name="" value="Google" id="login-gog">
												<p class="w-max">¿No tienes una cuenta?&nbsp;<a id="btn-sign-up" href="#/signup" class="btn-registrate">Regístrate</a></p>
											</form>
											<p id="hola"></p>
										</section>`; 
  formSignIn.innerHTML = template;
  const btnSignIn = formSignIn.querySelector('#btn-login');
  const btnSignGog = formSignIn.querySelector('#login-gog');
  const btnSignFb = formSignIn.querySelector('#login-fb');
  btnSignIn.addEventListener('click', () => {
    signInEmail();
  });
  btnSignGog.addEventListener('click', () => {
    signInGoogle();
  });
  btnSignFb.addEventListener('click', () => {
    signInFacebook();
  });
  return formSignIn;
};
