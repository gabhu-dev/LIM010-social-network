export default () => {
  const screenOne = document.createElement('section');
  const template = `
<header><nav>menu y encabezado</nav></header>
<p>aqui va el contenido</p>
<a></a>
`;
  screenOne.innerHTML = template;
  return screenOne;
};
