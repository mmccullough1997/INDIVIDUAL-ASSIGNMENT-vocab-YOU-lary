import getCards from '../../api/vocabularyData';
import domBuilder from '../components/builder/domBuilder';
import filterButtons from '../components/builder/filterButtons';
import navBar from '../components/builder/navBar';
import logoutButton from '../components/buttons/logoutButton';
import { showCards } from '../components/pages/vocabCards';
import navigationEvents from '../events/navigationEvents';

const startApp = (user) => {
  domBuilder();
  navBar();
  navigationEvents();
  logoutButton();
  filterButtons();
  console.warn(getCards(user.uid));
  getCards(user.uid).then((cardsArray) => showCards(cardsArray));
};

export default startApp;
