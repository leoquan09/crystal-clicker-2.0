const crystal = document.getElementById('crystal-img');
const scoreText = document.getElementById('crystal-count');
const title = document.querySelector('.game-title');

let savedScore = parseInt(localStorage.getItem('scores')); 
let score = isNaN(savedScore) ? 0 : savedScore;
scoreText.textContent = score;

crystal.addEventListener('click', () => { 
  score += 1; 
  localStorage.setItem('scores', score); 
  scoreText.textContent = score; 
});

title.addEventListener('mouseenter', () => {
    scoreText.textContent = "made by CatInTheRiceHat and Dih";
});

title.addEventListener('mouseleave', () => {
    scoreText.textContent = score;
});
