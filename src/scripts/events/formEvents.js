import { showCards } from '../components/pages/vocabCards';
import { createCard, updateCard } from '../../api/vocabularyData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (event) => {
    event.preventDefault();

    // click event for adding a card
    if (event.target.id.includes('submit-card')) {
      // const t = new Date();
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech: document.querySelector('#select-tech').value,
        time: new Date().toLocaleString(),
        uid
      };
      createCard(cardObject).then((cardsArray) => showCards(cardsArray));
    }

    // click event for editing a card
    if (event.target.id.includes('update-card')) {
      const [, firebaseKey] = event.target.id.split('--');
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech: document.querySelector('#select-tech').value,
        time: new Date().toLocaleString(),
        firebaseKey,
        uid
      };
      updateCard(cardObject).then(showCards);
    }
  });
};

export default formEvents;
