import questions from './questions.js';

const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scoreText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

const maxScore = document.querySelector('#max-score')
maxScore.innerHTML = 10


const SCORE_POINTS = 1
const MAX_QUESTIONS = 10

let getNewQuestions = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('./end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerHTML = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}


let startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestions()
}


choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if (!acceptingAnswers) return;

        acceptingAnswers = false;
        const selectedChoice = e.target;
        const selectedAnswer = selectedChoice.dataset['number'];

        let styleToApply = selectedAnswer == currentQuestion.answer ? 'linear-gradient(32deg, rgba(11, 223, 36) 0%, rgba(41, 232, 111) 100%)' : 'linear-gradient(32deg, rgba(230, 29, 29, 1) 0%, rgba(224, 11, 11, 1) 100%)';

        if (styleToApply === 'linear-gradient(32deg, rgba(11, 223, 36) 0%, rgba(41, 232, 111) 100%)') {
            incrementScore(SCORE_POINTS);
        }

        selectedChoice.parentElement.style.background = styleToApply;

        setTimeout(() => {
            selectedChoice.parentElement.style.background = '';
            getNewQuestions();

        }, 500);
    });
});


let incrementScore = num => {
    score +=num
    scoreText.innerText = score
}


startGame()

