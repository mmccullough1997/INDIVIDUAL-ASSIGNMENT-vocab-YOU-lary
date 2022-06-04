import renderToDOM from '../../helpers/renderToDom';

const filterButtons = () => {
  const domString = `
  <div class="btn-group filters">
    <button type="button" class="btn btn-primary filterButton" id="allCards">All Cards</button>

    <button type="button" class="btn btn-primary filterButton" id="language">Language</button>

    <button type="button" class="btn btn-primary filterButton" id="computing">Computing Technology</button>

    <button type="button" class="btn btn-primary filterButton" id="fintech">FinTech</button>
    
    <button type="button" class="btn btn-primary filterButton" id="platform">Platforms</button>
  </div>`;
  renderToDOM('#filter-buttons', domString);
};

export default filterButtons;
