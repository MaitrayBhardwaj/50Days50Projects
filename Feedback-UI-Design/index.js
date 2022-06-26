const reactions = document.querySelectorAll('.reaction')

let currReact = undefined

for(let i = 0; i < reactions.length; i++){
	reactions[i].addEventListener('click', () => {
		reactions[i].classList.add('selected')
		currReact == undefined || reactions[currReact].classList.remove('selected')
		currReact = i
	})
}

const emotes = ['Unhappy', 'Neutral', 'Satisfied']

const sendBtn = document.querySelector('.sendBtn')

sendBtn.addEventListener('click', () => {
	if(currReact !== undefined){
		document.querySelector('.rating').innerHTML = emotes[currReact]
		result.classList.toggle('d-none')
		main.classList.toggle('d-none')
	}
})