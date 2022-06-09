const xbox = document.querySelector('.xbox')
const ps5 = document.querySelector('.ps5')

xbox.addEventListener('mouseenter', () => {
	ps5.classList.add('mxw30')
	xbox.classList.remove('mxw30')
})

ps5.addEventListener('mouseenter', () => {
	xbox.classList.add('mxw30')
	ps5.classList.remove('mxw30')
})