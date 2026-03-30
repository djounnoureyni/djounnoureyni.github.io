document.getElementById('year').textContent = new Date().getFullYear();

const grid = document.getElementById('pixelGrid');
const colors = [
    'var(--scale-1)',
    'var(--scale-2)',
    'var(--scale-3)',
    'var(--scale-4)',
    'var(--scale-5)',
    'var(--scale-6)',
    'var(--scale-7)'
];
function initGrid() {
    grid.innerHTML = '';
    for (let i = 0; i < 169; i++) {
        const cell = document.createElement('div');
        cell.style.background = colors[Math.floor(Math.random() * colors.length)];
        grid.appendChild(cell);
    }
}
initGrid();
let interval = setInterval(initGrid, 1000);
grid.addEventListener('mouseenter', () => clearInterval(interval));
grid.addEventListener('mouseleave', () => interval = setInterval(initGrid, 1000));
grid.addEventListener('click', () => window.location.href = '/universes');
