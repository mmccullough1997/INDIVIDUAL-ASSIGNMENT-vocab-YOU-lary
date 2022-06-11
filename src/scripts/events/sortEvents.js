import { alphabeticallySortCards, newestToOldestCards, oldestToNewestCards } from '../../api/vocabularyData';
import { showCards } from '../components/pages/vocabCards';

const sortEvents = (uid) => {
  document.querySelector('#sortButton').addEventListener('click', (event) => {
    if (event.target.id.includes('sort-submit')) {
      if (document.querySelector('#sort').value === 'Alphabetically') {
        alphabeticallySortCards(uid).then((cardsArray) => showCards(cardsArray));
      } else if (document.querySelector('#sort').value === 'Oldest') {
        oldestToNewestCards(uid).then((cardsArray) => showCards(cardsArray));
      } else if (document.querySelector('#sort').value === 'Newest') {
        newestToOldestCards(uid).then((cardsArray) => showCards(cardsArray));
      }
    }
  });
};

export default sortEvents;
