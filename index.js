const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = ['violet', 'red', 'pink', 'black', 'yellow'];

button.addEventListener('click', () => {
    const colorIndex = Math.floor(Math.random() * colors.length);
    body.style.backgroundColor = colors[colorIndex];
});
