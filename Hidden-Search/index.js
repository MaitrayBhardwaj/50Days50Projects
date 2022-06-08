const btn = document.querySelector('#main button')
const inp = document.querySelector('#main input')

btn.addEventListener('click', () => {
	inp.classList.toggle('grow')
	inp.focus()
})