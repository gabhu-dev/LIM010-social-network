import { createPost } from '../controller/profile-control.js';

export default () => {
  const screenOne = document.createElement('section');
  const template = `
<header><nav>menu y encabezado</nav></header>
<div class="flex-r center-items">
<div class="profile">aqui va el perfil del usuario</div>
<div>
<input type="text" id="addPosts" class="post">
<button type="button" id="savePost">guardar</button>
</div>
<a></a>
</div>
<footer>aqui va el footer</footer>
`;
  screenOne.innerHTML = template;
  screenOne.setAttribute('class', ' size flex-sb');
  const btnSave = screenOne.querySelector('#savePost');
  btnSave.addEventListener('click', createPost);
  return screenOne;
};
