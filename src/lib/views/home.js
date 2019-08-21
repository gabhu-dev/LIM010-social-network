import { addPost, update } from '../controller/home-control.js';
import { logOut } from '../controller/sign-in-control.js';

export default () => {
  const viewHome = document.createElement('div');
  const template = `
  <!-- ------------------------------------------------ -->
  <header class="flex-r  bg-color-blue h-f-height ">
  <input type="checkbox" id="btn-menu" class="btn-menu">
  <label for="btn-menu"><i class='bx bx-menu bx-flip-vertical' ></i></label>
    <nav class="nav">
      <ul>
        <li class="list"><a href="">usuario</a></li>
        <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo-home" alt="logo hey! hallyu">
        <li type="button" id="log-out" class="list"><a href="">cerrar sesion</a></li>
      </ul>
    </nav>
  </header>
  <!-- ------------------------------------------------ -->
<div class="flex-r just-cont-cen">
     <div class="center-items flex-cn size-profile">
     <label class="img-profile"><p>Imagen de perfil</p></label>
      <p>Nombre del usuario</p>
      
     </div>
    <div class="two-col center-items flex-c">
      <label class="flex-c post-label bg-color-pink">
        <input type="text" id="text-post" class="post flex-c c-darkblue" placeholder="¿Qué quieres compartir?">
        <button type="button" id="btn-save" class="w-h-max bg-color-blue btn-share c-darkblue flex-c">Guardar</button>
      <button type="button" id="btn-up">subir</button>
            </label>
         <label class="flex-c post-label bg-color-pink">
      <div id="post-up" class="post flex-c c-darkblue">
    <td>Celda 1</td>
    </div>
</div>
    </label>
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
