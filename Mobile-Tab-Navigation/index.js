const tabs = document.querySelectorAll('.tab')
const img = document.querySelector('.img')

let curr = 0

const images = [
	'https://images.unsplash.com/photo-1593604340846-4fbe9763a8f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8OHx8fGVufDB8fHx8&w=1000&q=80',
	'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8d29ya3x8fHx8fDE2NTU0NTU2OTk&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
	'https://images.unsplash.com/photo-1586380951230-e6703d9f6833?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8YmxvZ3x8fHx8fDE2NTU0NTU3NzU&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
	'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29sbGVhZ3VlfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
]

img.style.backgroundImage = `url(${images[0]})`

for(let i = 0; i < tabs.length; i++){
	tabs[i].addEventListener('click', () => {
		img.style.backgroundImage = `url(${images[i]})`
		tabs[curr].classList.remove('active')
		tabs[i].classList.add('active')
		curr = i
	})
}