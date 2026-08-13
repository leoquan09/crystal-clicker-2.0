const crystal = document.getElementById('crystal-img');
const scoreText = document.getElementById('crystal-count');
const title = document.querySelector('.game-title');

let score = JSON.parse(localStorage.getItem('score')) ?? 0;

title.addEventListener('mouseenter', () => {
    scoreText.textContent = "made by CatInTheRiceHat and Dih"
});

title.addEventListener('mouseleave', () => {
    scoreText.textContent = score
});
