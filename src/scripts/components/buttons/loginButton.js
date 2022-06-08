import signIn from '../../helpers/auth/signIn';
import renderToDOM from '../../helpers/renderToDom';

// GOOGLE LOGIN BUTTON
const loginButton = () => {
  const domString = `
  <button id="google-auth" class="btn btn-danger">GOOGLE LOGIN</button>
  <h1 class="introHeader">Welcome to Vocab-YOU-Larry, y'all!</h1>
  <img src="https://i1.sndcdn.com/artworks-000079978071-u2cdqu-t500x500.jpg">`;
  renderToDOM('#app', domString);
  document.querySelector('#google-auth').addEventListener('click', signIn);
};

export default loginButton;
