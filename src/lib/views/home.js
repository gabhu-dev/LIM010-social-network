import { addPost } from '../controller/home-control.js';

export default () => {
  const viewHome = document.createElement('div');
  const template = `
  <header>
    <nav class="flex-r center-items bg-color-blue h-f-height">
      <p>Nombre de Usuario</p>
      <p>Logo</p>
      <p>Cerrar Sesión</p>
    </nav>
  </header>
  <div class="flex-r">
    <div class="two-col center-items">
      aqui va el perfil del usuario
    </div>
    <div class="two-col center-items">
      <label class="flex-c post-l bg-color-pink">
        <input type="text" id="text-post" class="post flex-c" placeholder="¿Qué quieres compartir?">
        <button type="button" id="btn-save" class="w-max bg-color-blue btn-share c-darkblue flex-c">Compartir</button>
      </label>
    </div>
  </div>
  <footer  class="bg-color-pink h-f-height">
    <p class="flex-r center-items">aqui va el footer</p>
  </footer>`;
  viewHome.innerHTML = template;
  viewHome.setAttribute('class', ' size');
  const btnSave = viewHome.querySelector('#btn-save');
  btnSave.addEventListener('click', addPost);
  return viewHome;
};
