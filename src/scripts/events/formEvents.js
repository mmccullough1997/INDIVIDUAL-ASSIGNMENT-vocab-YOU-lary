import { showCards } from '../components/pages/vocabCards';
import { createCard } from '../../api/vocabularyData';

const formEvents = (uid) => {
  document.querySelector('#main-container').addEventListener('submit', (event) => {
    event.preventDefault();

    // click event for adding a card
    if (event.target.id.includes('submit-card')) {
      const cardObject = {
        title: document.querySelector('#title').value,
        definition: document.querySelector('#definition').value,
        tech: document.querySelector('#select-tech').value,
        uid
      };
      createCard(cardObject).then((cardsArray) => showCards(cardsArray));
    }
  });
};

export default formEvents;
