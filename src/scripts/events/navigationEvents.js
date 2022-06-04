import addVocabCard from '../components/forms/addVocabCard';
import signOut from '../helpers/auth/signOut';

const navigationEvents = () => {
  // Logout Button
  document.querySelector('#logout-button').addEventListener('click', signOut);

  // click event for showing form to add card
  document.querySelector('#navigation').addEventListener('click', (event) => {
    if (event.target.id.includes('add-card-btn')) {
      console.warn('Add card');
      addVocabCard();
    }
  });
};

export default navigationEvents;
