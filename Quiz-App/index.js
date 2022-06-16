const questions = [
	{
		answer: 3
	},
	{
		question: "What does CSS stand for?",
		choices: [
			'Central Style Sheets',
			'Cascading Style Sheets',
			'Cascading Simple Sheets',
			'Cars SUVs Sailboats'
		],
		answer: 1
	},
	{
		question: "What does HTML stand for?",
		choices: [
			'Hypertext Markup Language',
			'Hypertext Markdown Language',
			'Hyperloop Machine Language',
			' Helicopters Terminals Motorboats Lamborginis'
		],
		answer: 0
	},
	{
		question: "What year was JavaScript launched?",
		choices: [
			1996,
			1995,
			1994,
			"None of the above"
		],
		answer: 1
	}
]

let currQues = 0
let selected = null
let score = 0

const main = document.querySelector('#main')
const result = document.querySelector('#result')
const btn = document.querySelector('.submit')
const question = document.querySelector('.question')
const labels = document.querySelectorAll('.question label')
const options = document.querySelectorAll('span.option')
const scoreSpan = document.querySelector('.score')
const reload = document.querySelector('#reload')

for(let i = 0; i < labels.length; i++){
	labels[i].addEventListener('click', () => {
		selected = i
	})
}

const changeQues = () => {
	if(currQues < questions.length - 1){
		currQues++
		labels[selected].firstElementChild.checked = false
		selected = null
		question.firstElementChild.innerHTML = questions[currQues].question
		for(let j = 0; j < options.length; j++){
			options[j].innerHTML = questions[currQues].choices[j]
		}
	}
	else{
		main.classList.toggle('d-none')
		result.classList.toggle('d-none')
		scoreSpan.innerHTML = score
	}
}

btn.addEventListener('click', () => {
	if(selected !== null){
		if(selected === questions[currQues].answer){
			console.log('Correct answer')
			score++
		}
		changeQues()
	}
})

reload.addEventListener('click', () => {
	window.location.href = window.location.href
})