const generateBtn = document.querySelector('.generate-btn')
const passSpan = document.querySelector('.generatedPassword')
const copyBtn = document.querySelector('.copyPassword')

const uppercase = document.querySelector('.uppercase')
const lowercase = document.querySelector('.lowercase')
const numbers = document.querySelector('.numbers')
const symbols = document.querySelector('.symbols')
const length = document.querySelector('.length')

let generatedPassword = ''

const blockLetters = []
const smallLetters = []
const digits = '0123456789'.split("")
const symbolsArr = '!@#$%^&*(){}[]=<>/,.'.split("")

for(let i = 0; i < 26; i++){
	blockLetters.push(String.fromCharCode(i + 65))
	smallLetters.push(String.fromCharCode(i + 97))
}

const generateRandomPassword = () => {
	let resultPool = []
	if(uppercase.checked){
		resultPool = [ ...blockLetters ]
	}
	if(lowercase.checked){
		resultPool = [ ...resultPool, ...smallLetters ]
	}
	if(numbers.checked){
		resultPool = [ ...resultPool, ...digits ]
	}
	if(symbols.checked){
		resultPool = [ ...resultPool, ...symbolsArr ]
	}

	let pass = []
	const len = parseInt(length.value)

	for(let i = 0; i < len; i++){
		pass.push(resultPool[Math.floor(Math.random() * resultPool.length)])
	}

	return pass.join("")
}

generateBtn.addEventListener('click', () => {
	const pass = generateRandomPassword()
	passSpan.innerHTML = pass
	generatedPassword = pass
})

copyBtn.addEventListener('click', async () => {
	await window.navigator.clipboard.writeText(generatedPassword)
	alert('Password copied to clipboard!')
})