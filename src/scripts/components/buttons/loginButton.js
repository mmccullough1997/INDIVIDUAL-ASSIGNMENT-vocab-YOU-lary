import signIn from '../../helpers/auth/signIn';
import renderToDOM from '../../helpers/renderToDom';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
  <h1 class="introHeader">Welcome to Vocab-YOU-Larry!</h1>`;
  renderToDOM('#app', domString);
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
