/* eslint-disable no-plusplus */
import { obtainProfile } from '../controller/users-profile.js';
import { logOut } from '../controller/sign-in-control.js';
import { currentUser } from '../model/firebase-auth.js';
import { listPosts } from './view-post.js';
import { addData } from '../controller/post-controll.js';

export default (allPost) => {
  const user = currentUser();
  obtainProfile(user.uid);
  const viewHome = document.createElement('div');
  const template = `
  <header class="bg-color-blue ">
    <input type="checkbox" id="btn-menu" class="hide">
    <label for="btn-menu"><i class='bx bx-menu nav-icon' style='color:#f3ecec'></i></label>
    <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png" / class="logo-home" alt="logo hey! hallyu">
    <nav class="nav">
      <ul class="flex-c">
        <li><a href="#" id="user-name"></a></li>
        <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png" / class="logo-nav hide" alt="logo hey! hallyu">
        <li type="button" id="log-out"><a href=""><i class='bx bx-exit bx-rotate-180' style='color:#f3e7e7'></i>Cerrar Sesión</a></li>
      </ul>
    </nav>
  </header>

  <div class="banner-post flex-c center-items">
    <div class="center-items size-profile al-self-start">
      <div id="img-profile-font" class="img-profile-font bg-color-pink ">
      </div>
      <div class="flex-r bg-color-pink">
        <div id="img-profile" class="img-profile">
        </div>
        <p id="user-info" class="user-info"></p>
      </div>
    </div>
    <div class="two-col center-items no-center width">
      <div class="post-label bg-color-pink flex-c center-items shadow">
        <textarea cols="50" rows="2" type="text" id="text-post" class="post c-darkblue" placeholder="¿Qué quieres compartir?"></textarea>
        <div class="flex-r share-label">
          <select id="mode" class="al-self-center m-r-1">
            <option value="Público">Público</option>
            <option value="Privado">Privado</option>
          </select>
          <button type="button" id="btn-save" class="bg-color-blue btn-share c-darkblue al-self-end">Compartir</button>
        </div>
  </div>
  <div class="form-post post-label" id="container-list-post">
  </div>`;
  viewHome.innerHTML = template;
  viewHome.setAttribute('class', 'size flex-c ');

  const btnSharePost = viewHome.querySelector('#btn-save');
  const containerListPost = viewHome.querySelector('#container-list-post');
  const btnLogOut = viewHome.querySelector('#log-out');

  // Publicar post
  btnSharePost.addEventListener('click', addData);

  // Imprime todas las publicaciones dinámicamente
  for (let i = 0; i < allPost.length; i++) {
    containerListPost.appendChild(listPosts(allPost[i]));
  }

  // Cerrar sesión
  btnLogOut.addEventListener('click', logOut);

  return viewHome;
};
