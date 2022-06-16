const wallpapers = [
	'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?cs=srgb&dl=pexels-joyston-judah-933054.jpg&fm=jpg',
	'https://tropikaia.com/wp-content/uploads/2019/07/beach_wallpapers_lowres_11-1400x788.jpg',
	'https://images5.alphacoders.com/100/thumb-1920-1009584.png',
	'https://wallpapercave.com/wp/wp2498852.jpg',
	'https://images.hdqwalls.com/wallpapers/lightning-pink-sky-4k-15.jpg'
]

let curr = 0

const body = document.body
const left = document.querySelector('.left')
const right = document.querySelector('.right')

left.addEventListener('click', () => {
	if(curr == 0){
		curr = wallpapers.length - 1
	}
	else{
		curr = curr - 1
	}

	body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${wallpapers[curr]})`
})

right.addEventListener('click', () => {
	if(curr == wallpapers.length - 1){
		curr = 0
	}
	else{
		curr = curr + 1
	}
	body.style.backgroundImage = `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(${wallpapers[curr]})`
})