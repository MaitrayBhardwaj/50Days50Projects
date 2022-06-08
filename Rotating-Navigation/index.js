const navBtn = document.querySelector('.navBtn')
const main = document.querySelector('#main')
const icon = document.querySelector('.navBtn i')
const nav = document.querySelector('.nav')

navBtn.addEventListener('click', () => {
	main.classList.toggle('tilted')
	nav.classList.toggle('sweep')
	icon.classList.toggle('bi-list')
	icon.classList.toggle('bi-x-lg')
})