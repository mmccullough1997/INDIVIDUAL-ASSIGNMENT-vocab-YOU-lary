import { showCards } from '../components/pages/vocabCards';
import { deleteCard, getSingleCard } from '../../api/vocabularyData';
import addVocabCard from '../components/forms/addVocabCard';

const domEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('click', (event) => {
    if (event.target.id.includes('delete-card')) {
      // eslint-disable-next-line no-alert
      if (window.confirm('Delete card?')) {
        const [, firebaseKey] = event.target.id.split('--');
        deleteCard(firebaseKey, uid).then((cardsArray) => showCards(cardsArray));
      }
    }

    if (event.target.id.includes('edit-card-btn')) {
      const [, firebaseKey] = event.target.id.split('--');
      getSingleCard(firebaseKey).then((cardObj) => addVocabCard(cardObj));
    }
  });
};

export default domEvents;
