// makeGrid builds the grid based on form submission:
function makeGrid(event) {
  event.preventDefault();// first prevent form from being reset
  function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
  }// removeAllChildNodes clears any previous canvas
  removeAllChildNodes(document.getElementById('pixelCanvas'))
  // build variables needed for grid:
  const height = document.getElementById('inputHeight').value;
  const width = document.getElementById('inputWidth').value;
  const grid = document.getElementById('pixelCanvas');
  // build style strings for setAttribute:
  const columns = 'grid-template-columns: ' + ' 1fr'.repeat(width) + ';';
  const rows = 'grid-template-rows: ' + ' 1fr'.repeat(height) + ';';
  const gridHeight = 'height: ' + height/width*70 + 'vw' + ';';
  // set up the grid:
  grid.setAttribute('style', columns + rows + gridHeight);
  // populate grid with children cells:
  for (let i = 1; i <= width*height; i++) {
      const newElement = document.createElement('div');
      newElement.classList.add('cell');      // newElement.setAttribute('style', 'background-color: ' + color + ';');
      grid.appendChild(newElement);
  }
}
// colorBlock changes color of cells based on click and color selected:
function colorBlock(event) {
  event.preventDefault();
  // get the color selected by user:
  const color = document.getElementById('colorPicker').value;
  // set the color of cell clicked:
  event.target.style.backgroundColor = color;
}
// add an event listener which calls makeGrid when form is submitted:
const form = document.getElementById('sizePicker');
form.addEventListener('submit', function () {makeGrid(event)});
// add an event listener which calls colorBlock when the user clicks in grid:
const grid = document.getElementById('pixelCanvas');
grid.addEventListener('click', function () {colorBlock(event)});
