// esto actua como controlador general de las urls
import { components } from '../views/components.js';
// import { getData } from './post-data.js';

export const viewTemplate = (routes) => {
  const container = document.getElementById('container');
  container.innerHTML = '';
  switch (routes) {
    case '#/':
      container.appendChild(components.signIn());
      break;
    case '#/signup':
      container.appendChild(components.signUp());
      break;
    case '#/home':
      // getData((post) => {
      //   container.innerHTML = '';
      //   container.appendChild((components.home(post)));
      // });
      container.appendChild(components.home());
      break;
    default:
      container.appendChild(components.signIn());
      break;
  }
};
