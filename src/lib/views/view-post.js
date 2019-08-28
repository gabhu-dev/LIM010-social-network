export const listPosts = (data) => {
  const containerOnePost = document.createElement('div');
  const templateOnePost = `
    <div id="jejejje">
        <h4>${data.usuario}</h4>
        <p>${data.privacity}</p>
        <p>${data.timePost.toDate()}</p>
    </div>

    <div>
        <p id="show-post-${data.id}">${data.post}</p>
    </div>
    <div>
        <button>editar borrar etc</button>
    </div>
    `;
  containerOnePost.innerHTML = templateOnePost;
  return containerOnePost;
};
// no olvidarse de cambiar el nombre de las variables
