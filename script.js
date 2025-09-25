// How many squares to render
const TOTAL = 800;
// Mount point
const board = document.getElementById('board');

// Utility: random color in rgb(r,g,b)
function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Create and attach 800 squares
for (let i = 0; i < TOTAL; i++) {
  const sq = document.createElement('div');
  sq.className = 'square';

  // On hover -> colorize
  sq.addEventListener('mouseover', () => {
    const color = randomColor();
    sq.style.backgroundColor = color;
    sq.style.boxShadow = `0 0 10px 2px ${color}`;
  });

  // On mouseout -> revert immediately
  sq.addEventListener('mouseout', () => {
    sq.style.backgroundColor = 'rgb(29, 29, 29)'; // matches Cypress
    sq.style.boxShadow = 'none';
  });

  board.appendChild(sq);
}
