/* eslint-disable no-tabs */
export const viewSignIn = () => {
  const formSignIn = document.createElement('section');
  const template = `<section id="log-in" class="flex-c center-items size">
                      <p>Aqui va la imagen</p>
											<p>Se da la bienvenida</p>
											<form name="login-form">
												<input type="email" name="email" placeholder="Email" id="email" required><input type="password" name="password" placeholder="Password" id="password" required>
												<input type="button" name="log-in" value="Log in" id="btn-login">
												<p>O bien ingresa con</p>
												<input type="button" name="" value="Facebook" id="login-fb">
												<input type="button" name="" value="Google" id="login-gog">
												<p>¿No tienes una cuenta?&nbsp<a id="btn-sign-up" href="#/signup">Registrate</a></p>
											</form>
											<input type="button" name="" value="Salir" id="btn-sign-out">
											<p id="hola"></p>
										</section>`; 
  formSignIn.innerHTML = template;
  return formSignIn;
};
