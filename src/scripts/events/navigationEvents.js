import signOut from '../helpers/auth/signOut';

const navigationEvents = () => {
  // Logout Button
  document.querySelector('#logout-button').addEventListener('click', signOut);
};

export default navigationEvents;
