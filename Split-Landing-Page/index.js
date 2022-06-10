const xbox = document.querySelector('.xbox')
const ps5 = document.querySelector('.ps5')

const style = document.querySelector('style')

const ps5CSS = `.ps5.fs2{flex-shrink: 2;}.ps5.f1{flex: 1;}`
const xboxCSS = `.xbox.fs2{flex-shrink: 2;}.xbox.f1{flex: 1;}`

xbox.addEventListener('mouseenter', () => {
	ps5.classList.add('mxw30')
	ps5.classList.add('fs2')
	xbox.classList.remove('mxw30')
	xbox.classList.remove('fs2')
	xbox.classList.add('f1')
	style.innerHTML = ps5CSS
})

ps5.addEventListener('mouseenter', () => {
	xbox.classList.add('mxw30')
	xbox.classList.add('fs2')
	ps5.classList.remove('mxw30')
	ps5.classList.remove('fs2')
	ps5.classList.add('f1')
	style.innerHTML = xboxCSS
})