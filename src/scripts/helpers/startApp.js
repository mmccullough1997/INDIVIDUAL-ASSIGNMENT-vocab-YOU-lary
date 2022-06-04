import domBuilder from '../../components/builder/domBuilder';
import navBar from '../../components/builder/navBar';
import logoutButton from '../components/logoutButton';
import navigationEvents from '../events/navigationEvents';

const startApp = () => {
  domBuilder();
  navBar();
  navigationEvents();
  logoutButton();
};

export default startApp;
