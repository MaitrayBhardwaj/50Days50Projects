const line = 'We Love Programming!'

const letters = line.split('')

const text = document.querySelector('.text')

const speedInp = document.querySelector('#speed')

let currLetter = 0

const autoText = () => {
	text.innerHTML += letters[currLetter]
	currLetter++
	if(currLetter == letters.length + 1){
		currLetter = 0
		text.innerHTML = ''
	}
}

let currIntrvID = setInterval(autoText, 1000)

speedInp.addEventListener('change', () => {
	const speed = speedInp.value
	clearInterval(currIntrvID)
	currIntrvID = setInterval(autoText, 1000/speed)
})