const  highScoresList = document.querySelector('#highScoresList')
const  highScores = JSON.parse(localStorage.getItem('highScores')) || []

const totaalPunten = 10
const slash = "/"

highScoresList.innerHTML =
highScores.map(score => {
    return `<li class="high-score">${score.name} - ${score.score}${slash}${totaalPunten}</li>`
}).join('')