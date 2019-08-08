/* eslint-disable no-tabs */
export const viewSignUp = () => {
  const formSignUp = document.createElement('form');
  const template = ` 	<section class="">
												<img src="" alt="">
												<h1>Crea una cuenta</h1>
												<input type="email" name="email" placeholder="Email" id="email" class="" required>
                      	<input type="password" name="password" placeholder="Password" id="password" class="" required>
												<p class="" id="msg-warning" ></p>
                        <button class="" id="btn-sign-up">Registrar</button>
                        <a href ="#/signin">Volver</a>
											</section>
										`;
  formSignUp.innerHTML = template;
  return formSignUp;
};
