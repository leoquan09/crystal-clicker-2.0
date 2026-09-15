import { upgrade1, upgrade2 } from '../shop/shop.js';
import { gamestate } from '../localStorage/score.js';

const crystal = document.getElementById('crystal-img');
const scoreText = document.getElementById('crystal-count');
const title = document.querySelector('.game-title');

function updateScoreUI() {
    scoreText.textContent = gamestate.score;
}

updateScoreUI();

function saveScores() {
    localStorage.setItem('scores', gamestate.score);
}

function upgradeLoop() {
    gamestate.score += Math.round((upgrade1.power + upgrade2.power)/2);
    updateScoreUI();
    saveScores();
}

//set initalizations
setInterval(upgradeLoop, 1000);

crystal.addEventListener('click', () => { 
  gamestate.score += 1; 
  saveScores()
  updateScoreUI();
});

title.addEventListener('mouseenter', () => {
    scoreText.textContent = "made by CatInTheRiceHat and Dih";
});

title.addEventListener('mouseleave', () => {
    updateScoreUI();
});
