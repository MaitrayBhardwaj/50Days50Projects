const init = document.querySelector('#init')
const main = document.querySelector('#main')

const keyPressed = document.querySelector('.keyPressed')
const keyCodePressed = document.querySelector('.keyCodePressed')
const codePressed = document.querySelector('.codePressed')

window.addEventListener('keydown', (ev) => {
	init.style.display = 'none'
	main.style.display = 'flex'

	keyPressed.innerHTML = ev.key === " " ? "Space" : ev.key
	keyCodePressed.innerHTML = ev.keyCode
	codePressed.innerHTML = ev.code
})