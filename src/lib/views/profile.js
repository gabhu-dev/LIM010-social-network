export default () => {
  const screenOne = document.createElement('section');
  const template = `
<header>
  <p>menu y encabezado</p>
  <nav>
  </nav>
</header>
<p>aqui va el contenido</p>
<a></a>
`;
  screenOne.innerHTML = template;
  return screenOne;
};
