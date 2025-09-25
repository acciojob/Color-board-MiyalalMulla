//your JS code here. If required.
// How many squares to render
const TOTAL = 800;
// Mount point
const board = document.getElementById('board');
// Utility: random color (nice saturated palette)
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

  // We’ll store any pending timeout id on the node itself
  // so quick re-hovers don’t fight each other.
  sq.addEventListener('mouseenter', () => {
    // If a previous fade-back is pending, cancel it
    if (sq._tid) {
      clearTimeout(sq._tid);
      sq._tid = null;
    }
    const color = randomColor();
    sq.style.backgroundColor = color;
    sq.style.boxShadow = `0 0 10px 2px ${color}`;
 // After 1 second, revert smoothly (CSS transition handles smoothness)
    sq._tid = setTimeout(() => {
  sq.style.backgroundColor = 'rgb(29, 29, 29)'; // match test
  sq.style.boxShadow = 'none';
  sq._tid = null;
}, 1000);

  });

  // Optional: if mouse leaves early, still allow the scheduled fade-back.
  // (No extra code needed; the timeout will handle it.)

  board.appendChild(sq);
}