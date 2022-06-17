const button = document.querySelector('#main button')
const notifs = document.querySelector('.notifs')

const getRandomElement = (arr) => {
	return arr[Math.floor(Math.random() * arr.length)]
}

const colors = ['red', 'purple', 'green', 'blue']
const nums = ['One', 'Two', 'Three', 'Four']

button.addEventListener('click', () => {
	const notif = document.createElement('div')
	notif.classList.add('notif')
	notif.innerHTML = `Message ${getRandomElement(nums)}`
	notif.classList.add(getRandomElement(colors))
	notifs.append(notif)
	setTimeout(() => notif.remove(), 3000)
})