import { addPost } from '../controller/home-control.js';

export default () => {
  const viewHome = document.createElement('section');
  const template = `
<header><nav>menu y encabezado</nav></header>
<div class="flex-r center-items">
<div class="profile">aqui va el perfil del usuario</div>
<div>
<input type="text" id="text-post" class="post">
<button type="button" id="btn-save">guardar</button>
</div>
<a></a>
</div>
<footer>aqui va el footer</footer>
`;
  viewHome.innerHTML = template;
  viewHome.setAttribute('class', ' size flex-sb');
  const btnSave = viewHome.querySelector('#btn-save');
  btnSave.addEventListener('click', addPost);
  return viewHome;
};
