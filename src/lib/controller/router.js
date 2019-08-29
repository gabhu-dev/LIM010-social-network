/* eslint-disable no-case-declarations */
// esto actua como controlador general de las urls
import { components } from '../views/components.js';
import { getPost, getPostProfile } from '../model/firebase-db.js';

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
      const callback = (objData) => {
        container.innerHTML = '';
        container.appendChild(components.home(objData));
      };
      getPost(callback);
      // container.appendChild(components.home());
      break;
    case '#/profile':
      const callbackp = (objData) => {
        container.innerHTML = '';
        container.appendChild(components.home(objData));
      };
      getPostProfile(callbackp);
      break;
    default:
      container.appendChild(components.signIn());
      break;
  }
};
