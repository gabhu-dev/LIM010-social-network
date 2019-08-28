import { signInGoogleV, signInFb, signIn } from '../controller/sign-in-control.js';

export default () => {
  const formSignIn = document.createElement('div');
  const template = `
  <div class ="banner bnsi-image center-items two-col">
  </div>
  <div class="center-items two-col  flex-c">
      <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo" alt="logo hey! hallyu">
      <!--<p class="w-max saludo">Siente la ola coreana</p>-->
      <form name="login-form" class="flex-c center-items">
        <input type="email" name="email" placeholder=" &#128100; Correo Electrónico" id="email" class="input-form flex-c pink" required focus>
        <input type="password" name="password" placeholder=" &#128274; Contraseña" id="password" class="input-form flex-c pink" required>
        <input type="button"name="log-in" value="Iniciar Sesión" id="btn-login" class="btn-signin c-darkpink bg-color-pink" ><a href="#/home"></a>
      </form>
      <p class="error" id=msg-wrong></p>
      <p>O bien ingresa con...</p>
      <div class="logos-face-google w-max">
        <button type="button" id="login-fb" class="btn-signin-social"><i class='bx bxl-facebook icons-size' style='color:#485aa3'></i></button>
        <button type="button" id="login-gog" class="btn-signin-social"><i class='bx bxl-google icons-size' style='color:#d2070a' ></i></button>
      </div>
      <p class="w-max">¿No tienes una cuenta?&nbsp;<a id="btn-sign-up" href="#/signup" class="btn-registrate c-darkblue">Regístrate</a></p>
  </div>`;
  formSignIn.innerHTML = template;
  formSignIn.setAttribute('class', 'flex-r center-items size bg-color-blue');
  const btnSignIn = formSignIn.querySelector('#btn-login');
  const btnSignGog = formSignIn.querySelector('#login-gog');
  const btnSignFb = formSignIn.querySelector('#login-fb');

  btnSignIn.addEventListener('click', signIn);
  btnSignGog.addEventListener('click', signInGoogleV);
  btnSignFb.addEventListener('click', signInFb);
  return formSignIn;
};
