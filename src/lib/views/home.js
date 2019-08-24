// import { profileUser } from '../controller/user-info-control.js';
import { logOut } from '../controller/sign-in-control.js';
import { save } from '../controller/home-control.js';

export default () => {
  const viewHome = document.createElement('div');
  const template = `
  <!-- --------------------header---------------------------- -->
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
 <div class="banner-post flex-c center-items">
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
     <label class="flex-c post-publicated just-cont-sb bg-color-pink"> 
       <p class="name-person"> nombre del que publico</p>
         <div id="post-up" class=" flex-c c-darkblue">
          <td></td> 
         </div>
       <div class="options-like-deleted">
         <button><i class='bx bx-heart'></i></button>
         <button><i class='bx bxl-telegram'></i></button>
       </div>
      </label>
    </div>
   </div> 
   <!-- -------------------------------------------------- -->
  <footer class="flex-r bg-color-pink h-f-height center-items">
    <p class="w-h-max">Creado por Gabhu y Sara con <3. Todos los Derechos Reservados.</p>
  </footer>`;
  viewHome.innerHTML = template;
  viewHome.setAttribute('class', 'size flex-c ');
  const btnLogOut = viewHome.querySelector('#log-out');
  btnLogOut.addEventListener('click', logOut);
  // const userName = viewHome.querySelector('#user-name');
  // profileUser(userName);
  // const textPost = viewHome.querySelector('#text-post');
  // saveInData(textPost);
  const btnSave = viewHome.querySelector('#btn-save');
  btnSave.addEventListener('click', save);
  return viewHome;
};
