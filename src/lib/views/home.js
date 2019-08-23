import { addPost, update } from '../controller/home-control.js';
import { logOut } from '../controller/sign-in-control.js';

export default () => {
  const viewHome = document.createElement('div');
  const template = `
  <!-- ------------------------------------------------ -->
  <header class="bg-color-blue ">
  <input type="checkbox" id="btn-menu" class="hide" >
  <label for="btn-menu"><i class='bx bx-menu bx-flip-vertical nav-icon' ></i></label>
    <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo-home" alt="logo hey! hallyu">
    <nav class="nav">
      <ul class="flex-c">
        <li><a href="">usuario</a></li>
        <li><a href=""> <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo-nav" alt="logo hey! hallyu"></a></li>
        <li type="button" id="log-out"><a href="">cerrar sesion</a></li>
      </ul>
    </nav>
  </header>
  <!-- ------------------------------------------------ -->
<div class="flex-c center-items">
<div class="center-items flex-r size-profile">

  <div class="img-profile"></div>
  <div>Nombre del usuario</div>
</div>
<div class="two-col center-items">
  <label class="post-label bg-color-pink">
  
    <input type="text" id="text-post" class="post flex-c c-darkblue" placeholder="¿Qué quieres compartir?">
    <button type="button" id="btn-img"><i class='bx bxs-image'></i></button>
    <button type="button" id="btn-save" class="bg-color-blue btn-share c-darkblue">Guardar</button>
    <button type="button" id="btn-up">subir</button>
  </label>
  <label class="flex-c post-label bg-color-pink"> 
  <p> nombre del que publico</p>
    <div id="post-up" class=" flex-c c-darkblue">
      <td>Celda 1</td> 
    </div>
  </label>
</div>
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
