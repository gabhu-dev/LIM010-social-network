import { signInEmail, signInGoogle, signInFacebook } from '../controller/ingresar.js';
// import { viewHome } from './home-1.js';

export const viewSignIn = () => {
  const formSignIn = document.createElement('section');
  const template = `
  <p>Aqui va la imagen</p>
  <p>Se da la bienvenida</p>
  <form name="login-form" class="flex-c center-items">
    <input type="email" name="email" placeholder="Email" id="email-signin" class="input-form flex-c" required>
    <input type="password" name="password" placeholder="Password" id="password-signin" class="input-form flex-c" required>
    <input type="button" name="log-in" value="Log in" id="btn-login" class="btn-signin ">
     </form>
    <p>O bien ingresa con</p>
    <div class="logos-face-google">
    <i class='bx bxl-facebook-square icons-size' style='color:#485aa3' id="login-fb" ></i>
    <i class='bx bxl-google-plus-circle icons-size' style='color:#e4e55a' id="login-gog" ></i>
    </div>
    <p class="w-max">¿No tienes una cuenta?&nbsp;<a id="btn-sign-up" href="#/signup" class="btn-registrate">Regístrate</a></p>
    `;
  formSignIn.innerHTML = template;
  formSignIn.setAttribute('class', 'flex-c center-items size bg-color-blue');
  const btnSignIn = formSignIn.querySelector('#btn-login');
  const btnSignGog = formSignIn.querySelector('#login-gog');
  const btnSignFb = formSignIn.querySelector('#login-fb');
  btnSignIn.addEventListener('click', () => {
    const email = document.getElementById('email-signin').value;
    const password = document.getElementById('password-signin').value;
    signInEmail(email, password);
  });
  btnSignGog.addEventListener('click', () => {
    signInGoogle();
  });
  btnSignFb.addEventListener('click', () => {
    signInFacebook();
  });
  return formSignIn;
};
