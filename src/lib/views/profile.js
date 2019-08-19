export default () => {
  const viewProfile = document.createElement('div');
  const template = `
  <header>
    <nav class="flex-r center-items">
      <p>Nombre de Usuario</p>
      <p>Logo</p>
      <p>Cerrar Sesión</p>
    </nav>
  </header>
  <div class="flex-r">
    <div class="two-col center-items">
      aqui va el perfil del usuario
    </div>
    <div class="two-col center-items">
      <input type="text" id="post" class="post">
      <button type="button" id="savePost">Postear</button>
    </div>
  </div>
  <footer>
    <p class="flex-r center-items">aqui va el footer</p>
  </footer>`;
  viewProfile.innerHTML = template;
  viewProfile.setAttribute('class', 'size');
  console.log(document.getElementById('add-post'));
  return viewProfile;
};
