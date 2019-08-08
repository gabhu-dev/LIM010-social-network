//esto actua como controlador general de las urls

import { viewSignIn } from '../views/sign-in.js';
import { viewSignUp } from '../views/sign-up.js';

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
    default:
      container.appendChild(viewSignIn());
      break;
  }
};
const changeTemplate = (hash) => {
  if (hash === '#/signup' || hash === '#/signin'){
     return viewTemplate(hash);
    }
    return viewTemplate(hash);
};

export const initRouter = () => {
  window.addEventListener('load', changeTemplate(window.location.hash));
  if (('onhashchange' in window)) window.onhashchange = () => changeTemplate(window.location.hash);
};


