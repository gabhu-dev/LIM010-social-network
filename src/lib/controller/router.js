/* eslint-disable import/no-cycle */
// esto actua como controlador general de las urls
import { viewSignIn } from '../views/sign-in.js';
import { viewSignUp } from '../views/sign-up.js';
import { viewHome } from '../views/home-1.js';

export const changeHash = (hashName) => {
  window.location.hash = hashName;
};

const viewTemplate = (routers) => {
  const router = routers.substr(2, routers.length - 2);
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (router) {
    case 'signin':
      container.appendChild(viewSignIn());
      break;
    case 'signup':
      container.appendChild(viewSignUp());
      break;
    case 'home':
      container.appendChild(viewHome());
      break;
    default:
      container.appendChild(viewSignIn());
      break;
  }
};
const changeTemplate = (hash) => {
  if (hash === '#/signup' || hash === '#/signin' || hash === '#/home') {
    return viewTemplate(hash);
  }
  return viewTemplate(hash);
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash);
};
