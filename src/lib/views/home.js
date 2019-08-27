import { obtainProfile } from '../controller/users-profile.js';
import { logOut } from '../controller/sign-in-control.js';
import { currentUser } from '../model/firebase-auth.js';
// import { itemPost } from './post.js';
// import { profileUser } from '../controller/user-info-control.js';
// import { logOut } from '../controller/sign-in-control.js';
import { save, readPost } from '../controller/home-control.js';
// import { deleteData } from '../controller/post-data.js';

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
 <div class="banner-post flex-c">
   <div class="center-items flex-r size-profile">
     <div id="img-profile" class="img-profile">name</div>
     <div>
      <p id="user-info"></p>
     </div>
   </div>
   <div class="divpost">
     <label class="post-label bg-color-pink">
       <input type="text" id="text-post" class="post flex-c c-darkblue" placeholder="¿Qué quieres compartir?">
       <div class="buttons-post-label">
       <button type="button" id="btn-img"><i class='bx bxs-image'></i></button>
       <button type="button" id="btn-save" class="bg-color-blue btn-share c-darkblue">Guardar</button>
       <button type="button" id="btn-up">subir</button>
       </div>
     </label>
         <div id="post-up" class=" post-up flex-c c-darkblue bg-color-pink">
      
         </div>
       <!-- <div class="options-like-deleted">
         <button><i class='bx bx-heart'></i></button>
         <button><i class='bx bxl-telegram'></i></button>
       </div> -->
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

  const user = currentUser();
  obtainProfile(user.uid);

  const btnSave = viewHome.querySelector('#btn-save');
  btnSave.addEventListener('click', save);
  const btnUp = viewHome.querySelector('#btn-up');
  btnUp.addEventListener('click', readPost);
  // const label = viewHome.querySelector('label-publicate');
  // posts.forEach((post) => {
  //   label.appendChild(itemPost(post));
  // });

  return viewHome;
};
