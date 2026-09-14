import { gamestate } from "../localStorage/score.js";

export const upgrade1 = {
    btn: document.getElementById('buy-1'),
    costText: document.getElementById('cost1'),
    lvl: isNaN(parseInt(localStorage.getItem('upgradeOneLvl'))) ? 0 : parseInt(localStorage.getItem('upgradeOneLvl')),
    power: isNaN(parseFloat(localStorage.getItem('upgradeOnePower'))) ? 1 : parseFloat(localStorage.getItem('upgradeOnePower')),
    cost: isNaN(parseFloat(localStorage.getItem('upgradeOneCost'))) ? 20 : parseFloat(localStorage.getItem('upgradeOneCost'))
};

export const upgrade2 = {
    btn: document.getElementById('buy-2'),
    costText: document.getElementById('cost2'),
    lvl: isNaN(parseInt(localStorage.getItem('upgradeTwoLvl'))) ? 0 : parseInt(localStorage.getItem('upgradeTwoLvl')),
    power: isNaN(parseFloat(localStorage.getItem('upgradeTwoPower'))) ? 0 : parseFloat(localStorage.getItem('upgradeTwoPower')),
    cost: isNaN(parseFloat(localStorage.getItem('upgradeTwoCost'))) ? 100 : parseFloat(localStorage.getItem('upgradeTwoCost'))
};

export const shopInit = () => {
    const updateUIElements = () => {
        const scoreText = document.getElementById('crystal-count');
        if (scoreText) {
            scoreText.textContent = gamestate.score;
        }
    };

    upgrade2.costText.textContent = `Level ${upgrade2.lvl + 1} cost: ${upgrade2.cost} crystals`;
    upgrade1.costText.textContent = `Level ${upgrade1.lvl + 1} cost: ${upgrade1.cost} crystals`;

    upgrade1.btn.addEventListener('click', () => {
        if (gamestate.score >= upgrade1.cost) {
            gamestate.score -= upgrade1.cost; 
            upgrade1.lvl += 1; 
            upgrade1.power = upgrade1.power * 1.1; 
            upgrade1.cost = Math.round(upgrade1.cost * 1.15); 
    
            updateUIElements();
            upgrade1.costText.textContent = `Level ${upgrade1.lvl + 1} cost: ${upgrade1.cost} crystals`; 

            localStorage.setItem('scores', gamestate.score);
            localStorage.setItem('upgradeOneLvl', upgrade1.lvl);
            localStorage.setItem('upgradeOnePower', upgrade1.power);
            localStorage.setItem('upgradeOneCost', upgrade1.cost);
        }
    });

    upgrade2.btn.addEventListener('click', () => {
        if (gamestate.score >= upgrade2.cost) {
            gamestate.score -= upgrade2.cost; 
            upgrade2.lvl += 1; 
            upgrade2.power = upgrade2.power === 0 ? 5 : upgrade2.power * 1.1;
            upgrade2.cost = Math.round(upgrade2.cost * 1.15); 
    
            updateUIElements();
            upgrade2.costText.textContent = `Level ${upgrade2.lvl + 1} cost: ${upgrade2.cost} crystals`; 

            localStorage.setItem('scores', gamestate.score);
            localStorage.setItem('upgradeTwoLvl', upgrade2.lvl);
            localStorage.setItem('upgradeTwoPower', upgrade2.power);
            localStorage.setItem('upgradeTwoCost', upgrade2.cost);
        }
    });
}

shopInit();
