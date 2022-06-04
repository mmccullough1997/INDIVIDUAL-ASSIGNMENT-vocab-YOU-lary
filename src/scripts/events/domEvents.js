import { showCards } from '../components/pages/vocabCards';
import { deleteCard } from '../../api/vocabularyData';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (event) => {
    if (event.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete card?')) {
        const [, firebaseKey] = event.target.id.split('--');
        deleteCard(firebaseKey, uid).then((cardsArray) => showCards(cardsArray));
      }
    }
  });
};

export default domEvents;
