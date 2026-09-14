const savedScore = localStorage.getItem('scores');

export const gamestate = { 
    score: savedScore ? parseInt(savedScore, 10) : 0 
};