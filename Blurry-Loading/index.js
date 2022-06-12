const body = document.body
const main = document.querySelector('#main')

let blur = 25, percent = 0, alpha = 1

const reduceBlur = () => {
	blur = blur - 0.25
	percent = percent + 1
	alpha = alpha - 0.01

	body.style.backdropFilter = `blur(${blur}px)`
	main.style.color = `rgba(255,255,255,${alpha})`
	main.innerHTML = `${percent}%`
	if(percent == 100){
		main.innerHTML = ''
	}
}

window.addEventListener('load', () => {
	const intervalID = setInterval(reduceBlur, 35)
	setTimeout(() => {
		clearInterval(intervalID)
		main.innerHTML = ''
	}, 4000)
})