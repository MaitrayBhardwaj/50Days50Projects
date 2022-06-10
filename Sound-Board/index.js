const main = document.querySelector('#main')

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

const divs = main.children

for(let idx = 0; idx < 6; idx++) {
	divs[idx].addEventListener('click', () => {
		const audio = new Audio(`./sounds/${sounds[idx]}.mp3`)
		audio.play()
	})
}