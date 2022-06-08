import renderToDOM from '../../helpers/renderToDom';

const filterButtons = () => {
  const domString = `
  <div class="btn-group filters">
    <button type="button" class="btn btn-light filterButton" id="allCards">All Cards</button>

    <button type="button" class="btn btn-light filterButton" id="language">Language</button>

    <button type="button" class="btn btn-light filterButton" id="computing">Computing Technology</button>

    <button type="button" class="btn btn-light filterButton" id="fintech">FinTech</button>
    
    <button type="button" class="btn btn-light filterButton" id="platform">Platforms</button>
  </div>`;
  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
