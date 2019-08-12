// import { signInEmail, signInGoogle, signInFacebook } from '../controller/ingresar.js';
export const viewHome = () => {
  const screenOne = document.createElement('section');
  const template = `
<header><nav>menu y encabezado</nav></header>
<div>aqui va el contenido</div>
`;
  screenOne.innerHTML = template;
};
