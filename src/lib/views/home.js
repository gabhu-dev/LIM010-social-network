/* eslint-disable no-plusplus */
import { obtainProfile } from '../controller/users-profile.js';
import { logOut } from '../controller/sign-in-control.js';
import { currentUser } from '../model/firebase-auth.js';
import { listPosts } from './view-post.js';
import { addData } from '../controller/post-controll.js';
// import { upImgs } from '../model/firebase-db.js';

export default (allPost) => {
  // Da el usuario actual y muestra sus datos al loguearse
  const user = currentUser();
  obtainProfile(user.uid);
  const viewHome = document.createElement('div');
  const template = `
  <!-- --------------------header---------------------------- -->
  <header class="bg-color-blue ">
  <input type="checkbox" id="btn-menu" class="hide" >
  <label for="btn-menu"><i class='bx bx-menu nav-icon' style='color:#f3ecec'  ></i></label>
    <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo-home" alt="logo hey! hallyu">
    <nav class="nav">
      <ul class="flex-c">
        <li><a href="#">${user.email}</a></li>
        <li class="hide"><a href="#/home"> <img src="https://raw.githubusercontent.com/gabhu-dev/LIM010-social-network/master/src/lib/img/logo3.png"/ class="logo-nav" alt="logo hey! hallyu"></a></li>
        <li type="button" id="log-out"><a href="">Cerrar Sesión</a></li>
      </ul>
    </nav>
  </header>
  <!-- ------------------------------------------------ -->
  <div class="banner-post flex-c center-items">
  <!-- ------------------ profile------------------------ -->
    <div class="center-items size-profile al-self-start">
      <div id="img-profile-font" class="img-profile-font bg-color-blue">img-font</div>
      <div class="flex-r bg-color-pink">
        <div id="img-profile" class="img-profile"></div>
        <p id="user-info" class="user-info"></p>
      </div>
    </div>

  <!-- ------------------------------------------------- -->
    <div class="two-col center-items no-center">
      <div class="post-label bg-color-pink flex-c center-items">
        <textarea cols="50" rows="2" type="text" id="text-post" class="post c-darkblue" placeholder="¿Qué quieres compartir?"></textarea>


<!-- <img id="img-preview" class="img-preview"></img> -->
        <div class="flex-r">
          <!-- <button type="button" id="btn-img" class="al-self-start btn-share"><i class='bx bxs-image'></i></button> -->
          <select id="mode" class="al-self-center">
            <option value="Público">Público</option>
            <option value="Privado">Privado</option>
          </select> 
          <!-- <input type="file" id="btn-img"> -->
          <button type="button" id="btn-save" class="bg-color-blue btn-share c-darkblue al-self-end">Compartir</button>
        <div>
 </div>
    </div>
    <p id="alert-msg" class=""></p>
  </div> 
  <div class="form-post post-label" id="container-list-post"></div>
   <!-- -------------------------------------------------- -->
  <!--<footer class="flex-r bg-color-pink h-f-height center-items">
    <p class="w-h-max">Creado por Gabhu y Sara con <3. Todos los Derechos Reservados.</p>
  </footer>-->`;
  viewHome.innerHTML = template;
  viewHome.setAttribute('class', 'size flex-c ');

  const btnSharePost = viewHome.querySelector('#btn-save');
  const containerListPost = viewHome.querySelector('#container-list-post');
  const btnLogOut = viewHome.querySelector('#log-out');

  // Publicar post
  btnSharePost.addEventListener('click', addData);
  // Imprimir todo las publicaciones dinamicamente
  for (let i = 0; i < allPost.length; i++) {
    containerListPost.appendChild(listPosts(allPost[i]));
  }
  // Cerrar sesión
  btnLogOut.addEventListener('click', logOut);

  // cargar una imagen
  // const imageUp = document.getElementById('img-preview');
  // const btnImage = viewHome.querySelector('#btn-img');
  // btnImage.addEventListener('change', (e) => {
  //   const file = e.target.files[0];
  //   const filePath = 'upload/imagen.png';
  //   const ref = firebase.storage().ref(filePath);
  //   const task = firebase.storage().put(filePath, file);
  //   // eslint-disable-next-line no-console
  //   console.log(file);
  // });
  return viewHome;
};
