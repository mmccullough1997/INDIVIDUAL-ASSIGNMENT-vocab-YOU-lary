import renderToDOM from '../../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navigation"></div>
  <div id="filter-buttons"></div>
  <div id="sortButton"></div>
  <div id="main-container">
    <div id="form-container"></div>
    <div id="cards-container"></div>
  </div>`;

  renderToDOM('#app', domString);
};

export default domBuilder;
