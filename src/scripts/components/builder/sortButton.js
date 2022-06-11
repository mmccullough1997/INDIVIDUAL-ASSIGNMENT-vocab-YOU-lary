import renderToDOM from '../../helpers/renderToDom';

const sortButton = () => {
  const domString = `
  <select class="form-select sortFilter" aria-label="sort" id="sort">
    <option selected>Sort</option>
    <option value="Alphabetically" id='alphabetically'>Alphabetically</option>
    <option value="Oldest">Oldest</option>
    <option value="Newest">Newest</option>
  </select>
  <button type="submit" class="btn btn-primary sortButtonIcon" id="sort-submit"><i class="fa fa-sort"></i>
  </button>`;
  renderToDOM('#sortButton', domString);
};

export default sortButton;
