const fbfans = document.querySelector('.fbfans')
const twfo = document.querySelector('.twfo')
const ytsub = document.querySelector('.ytsub')

let fans = 0
let sub = 0
let fol = 0

window.addEventListener('load', () => {
	const timerID = setInterval(() => {
		sub = sub + 25
		ytsub.innerHTML = sub
		if(fol != 12000){
			fol = fol + 60
			twfo.innerHTML = fol
		}
		if(fans != 7500){
			fans = fans + 37.5
			fbfans.innerHTML = Math.floor(fans)
		}
	}, 10)

	setInterval(() => clearInterval(timerID), 2000)
})