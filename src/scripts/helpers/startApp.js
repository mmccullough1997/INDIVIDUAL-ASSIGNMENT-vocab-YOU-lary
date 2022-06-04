import domBuilder from '../../components/builder/domBuilder';
import navBar from '../../components/builder/navBar';
import logoutButton from '../components/logoutButton';

const startApp = () => {
  domBuilder();
  navBar();
  logoutButton();
};

export default startApp;
