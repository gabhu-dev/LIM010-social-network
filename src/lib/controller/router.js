// esto actua como controlador general de las urls
import { components } from '../views/components.js';

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
      container.appendChild(components.profile());
      break;
    default:
      container.appendChild(components.signIn());
      break;
  }
};
