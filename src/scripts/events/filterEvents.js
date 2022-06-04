import
{
  cardsComputing, cardsFintech, cardsPlatform, cardsProgrammingLanguage, getCards
} from '../../api/vocabularyData';
import { showCards } from '../components/pages/vocabCards';

// All cards
const filterEvents = (uid) => {
  document.querySelector('#allCards').addEventListener('click', () => {
    getCards(uid).then((cardsArray) => showCards(cardsArray));
  });

  // Filter by Language
  document.querySelector('#language').addEventListener('click', () => {
    cardsProgrammingLanguage(uid).then((cardsArray) => showCards(cardsArray));
  });

  // Filter by Computing Technology
  document.querySelector('#computing').addEventListener('click', () => {
    cardsComputing(uid).then((cardsArray) => showCards(cardsArray));
  });

  // Filter by FinTech
  document.querySelector('#fintech').addEventListener('click', () => {
    cardsFintech(uid).then((cardsArray) => showCards(cardsArray));
  });

  // Filter by Platform
  document.querySelector('#platform').addEventListener('click', () => {
    cardsPlatform(uid).then((cardsArray) => showCards(cardsArray));
  });
};

export default filterEvents;
