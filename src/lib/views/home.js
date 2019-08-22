import { addPost, update } from '../controller/home-control.js';
import { logOut } from '../controller/sign-in-control.js';

export default () => {
  const viewHome = document.createElement('div');
  const template = `
  <header>
    <nav class="flex-r center-items bg-color-blue h-f-height just-cont-sa">
      <p class="logo-home">Usuario</p>
      <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo-home" alt="logo hey! hallyu">
      <button type="button" id="log-out" class="logo-home">Cerrar Sesión</button>
    </nav>
  </header>
  <div class="flex-r">
     <div class="one-col two-col center-items flex-c">
      <p>Nombre del usuario</p>
      <p>Imagen de perfil</p>
      <p id="emails"></p>
    </div>

    <div class="one-col two-col center-items flex-c">
      <label class="flex-c post-label bg-color-pink">
        <input type="text" id="text-post" class="post flex-c c-darkblue" placeholder="¿Qué quieres compartir?">
        <button type="button" id="btn-save" class="w-h-max bg-color-blue btn-share c-darkblue flex-c">Compartir</button>
        <select id="status">
        <option value="Público">Público</option>
        <option value="Privado">Privado</option>
      </select>
      </label>
    </div>
    <div id="show-post"></div>
      <button type="button" id="btn-up">subir</button>
        </label>
    </div>
    <input type="text" id="post-up">
  </div>
  <footer class="flex-r bg-color-pink h-f-height center-items">
    <p class="w-h-max">Creado por Gabhu y Sara con <3. Todos los Derechos Reservados.</p>
  </footer>`;
  viewHome.innerHTML = template;
  viewHome.setAttribute('class', 'size flex-c just-cont-sb');
  const btnSave = viewHome.querySelector('#btn-save');
  const btnLogOut = viewHome.querySelector('#log-out');
  const btnUp = viewHome.querySelector('#btn-up');
  btnSave.addEventListener('click', addPost);
  btnLogOut.addEventListener('click', logOut);
  btnUp.addEventListener('click', update);

  return viewHome;
};
