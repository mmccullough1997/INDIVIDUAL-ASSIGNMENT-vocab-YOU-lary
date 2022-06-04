import renderToDOM from '../../scripts/helpers/renderToDom';

const navBar = () => {
  const domString = `

  <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light mb-5">

  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vocab-YOU-Lary</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    
    <div class="collapse navbar-collapse" id="navbarText">

      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item active">
          <a class="nav-link active" href="#" id="all-cards>All Cards</a>
        </li>

        <li class="nav-item">
        <button class="btn btn-success btn-lg mb-4" id="add-card-btn">Add A Card</button>
        </li>

        <li>
          <input
          class="form-control me-2"
          id="search"
          placeholder="Search Cards"
          aria-label="Search"
          />
        </li>
      </ul>

      <span class="navbar-text">
        <div id="logout-button"></div>
      </span>

    </div>
  </div>
</nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
