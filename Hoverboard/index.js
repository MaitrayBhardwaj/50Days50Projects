const main = document.querySelector('#main')

const qty = 500

for(let i = 0; i < qty; i++){
	const box = document.createElement('div')
	box.classList.add('box')
	main.appendChild(box)
}

const colors = ['red', 'orange', 'green', 'blue', 'purple']
const boxes = document.querySelectorAll('.box')

const chooseRandomColor = () => {
	return colors[Math.floor(Math.random() * colors.length)]
}

for(let i = 0; i < qty; i++){
	boxes[i].addEventListener('mouseenter', () => {
		const color = chooseRandomColor()
		boxes[i].classList.add(color)
	})
	boxes[i].addEventListener('mouseout', () => {
		setTimeout(() => {
			for(let j = 0; j < colors.length; j++){
				boxes[i].classList.remove(colors[j])
			}
		}, 1000)
	})
}