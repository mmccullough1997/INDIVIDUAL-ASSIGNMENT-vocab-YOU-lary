import renderToDOM from '../../helpers/renderToDom';

const navBar = () => {
  const domString = `
  
  <nav class="navbar fixed-top navbar-expand-lg navbar-light mb-5" style="background-color: #010658;">

    <div class="container-fluid">
    
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon navIcon"></span>
      </button>
      
      <div class="collapse navbar-collapse" id="navbarText">

        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <a class="nav-link active" href="#" id="all-cards>All Cards</a>
          </li>

          <li class="nav-item">
          <button class="btn btn-success ml-2" id="add-card-btn"><i class="fa fa-plus"></i> Add A Card</button>
          </li>

        </ul>

        
        
        <span class="navbar-text">
        <div id="logout-button"></div>
        </span>
        
        <img class="logo" src="https://i.ibb.co/9sB8Rr8/logo.jpg">
      </div>
    </div>
  </nav>`;

  renderToDOM('#navigation', domString);
};

export default navBar;
