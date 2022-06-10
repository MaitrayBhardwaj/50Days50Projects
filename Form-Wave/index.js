const emailLetters = document.querySelectorAll('.emailLetters')
const passLetters = document.querySelectorAll('.passLetters')

emailLetters.forEach((letter, idx) => {
	letter.style.transitionDelay = `${idx * 50}ms`
})

passLetters.forEach((letter, idx) => {
	letter.style.transitionDelay = `${idx * 50}ms`
})