import renderToDOM from '../../helpers/renderToDom';

const emptyCards = () => {
  const domString = '<h1>No Cards to Display</h1>';
  renderToDOM('#cards-container', domString);
};

const showCards = (array) => {
  if (array.length) {
    let domString = '';
    array.forEach((card) => {
      domString += `
      <div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${card.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted card-tech">${card.tech}</h6>
        <p class="card-definition">${card.definition}</p>
        <hr>
        <i id="edit-card-btn--${card.firebaseKey}" class="fas fa-edit btn btn-info"></i>
        <i id="delete-card-btn--${card.firebaseKey}" class="btn btn-danger fas fa-trash-alt"></i>
      </div>
      </div>`;
    });
    renderToDOM('#cards-container', domString);
  } else {
    emptyCards();
    console.warn('no cards');
  }
};

export { emptyCards, showCards };
