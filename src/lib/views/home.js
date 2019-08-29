/* eslint-disable no-plusplus */
import { obtainProfile } from '../controller/users-profile.js';
import { logOut } from '../controller/sign-in-control.js';
import { currentUser } from '../model/firebase-auth.js';
import { listPosts } from './view-post.js';
import { functionSharePost } from '../controller/post-controll.js';

export default (allPost) => {
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
      <div id="img-profile" class="img-profile"></div>
      <div>
        <p id="user-info"></p>
      </div>
    </div>
    <div class="two-col center-items">
      <div class="post-label bg-color-pink">
        <textarea cols="50" rows="2" type="text" id="text-post" class="post flex-c c-darkblue" placeholder="¿Qué quieres compartir?">
        </textarea>
        <img id="img-preview"></img>
        <select id="mode">
          <option value="Público">Público</option>
          <option value="Privado">Privado</option>
        </select>
        <input type="file" id="btn-img">
        <button type="button" id="btn-save" class="bg-color-blue btn-share c-darkblue">Compartir</button>
      </div>
    </div>
    <div class="form-post" id="container-list-post"></div>
  </div> 
   <!-- -------------------------------------------------- -->
  <footer class="flex-r bg-color-pink h-f-height center-items">
    <p class="w-h-max">Creado por Gabhu y Sara con <3. Todos los Derechos Reservados.</p>
  </footer>`;
  viewHome.innerHTML = template;
  viewHome.setAttribute('class', 'size flex-c ');

  const btnSharePost = viewHome.querySelector('#btn-save');
  const containerListPost = viewHome.querySelector('#container-list-post');
  const btnLogOut = viewHome.querySelector('#log-out');

  // Publicar post
  btnSharePost.addEventListener('click', functionSharePost);
  // Imprimir todo las publicaciones dinamicamente
  for (let i = 0; i < allPost.length; i++) {
    containerListPost.appendChild(listPosts(allPost[i]));
  }
  // Cerrar sesión
  btnLogOut.addEventListener('click', logOut);
  // Da el usuario actual y muestra sus datos al loguearse
  const user = currentUser();
  obtainProfile(user.uid);
  // cargar una imagen
  // const imageUp = document.getElementById('img-preview');
  const btnImage = viewHome.querySelector('#btn-img');
  btnImage.addEventListener('change', (e) => {
    const file = e.target.files[0];
    console.log(file);
  });
  return viewHome;
};
