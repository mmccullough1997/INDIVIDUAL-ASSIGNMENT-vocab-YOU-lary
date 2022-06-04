import clearDom from '../../helpers/clearDom';
import renderToDOM from '../../helpers/renderToDom';

const addVocabCard = (obj = {}) => {
  clearDom();
  const domString = `
  <form id="${obj.firebaseKey ? `update-card--${obj.firebaseKey}` : 'submit-card'}" class="mb-4">
  
  <div class="form-group">
    <label for="title">Title</label>
    <input type="text" class="form-control" id="title" aria-describedby="cardTitle" placeholder="Enter Card Title" value="${obj.title || ''}" required>
  </div>
  
  <div class="form-group">
    <label for="description">Definition</label>
    <textarea class="form-control" placeholder="Card Definition" id="definition" style="height: 100px">${obj.definition || ''}</textarea>
  </div>

  <select class="form-select" aria-label="Select Tech Category" id="select-tech">
    <option selected>${obj.tech || 'Select Tech Category'}</option>
    <option value="Language">Language</option>
    <option value="Computing Technology">Computing Technology</option>
    <option value="FinTech">FinTech</option>
    <option value="Platform">Platform</option>
  </select>

  <button type="submit" class="btn btn-primary">Submit Book
  </button>
  
  </form>`;

  renderToDOM('#form-container', domString);
};

export default addVocabCard;
