let homeScore = document.getElementById("home-score");
let guessScore = document.getElementById("guess-score");
let renderHScore = 0;
let renderGScore = 0;


function renderHomeScore(renderHScore){
    homeScore.textContent = renderHScore
}

function renderGuessScore(renderGScore){
    guessScore.textContent = renderGScore
}

function home1(){
    renderHomeScore(renderHScore += 1)
}
function home2(){
    renderHomeScore(renderHScore += 2)
}
function home3(){
    renderHomeScore(renderHScore += 3)
}

function guess1(){
 renderGuessScore(renderGScore += 1)
}
function guess2(){
 renderGuessScore(renderGScore += 2)
}
function guess3(){
 renderGuessScore(renderGScore += 3)
} 