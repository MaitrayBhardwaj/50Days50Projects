const prev = document.querySelector('#prev')
const next = document.querySelector('#next')

const steps = document.querySelectorAll('.step')
const blueLine = document.querySelector('.blueLine')

let idx = 0

next.addEventListener('click', () => {
	idx = idx + 1
	
	if(idx === steps.length - 1){
		next.disabled = true
		next.classList.add('disabled')
	}

	if(idx > 0){
		prev.disabled = false
		prev.classList.remove('disabled')
	}

	steps[idx].classList.toggle('reachedStep')
	blueLine.style.width = `${ idx * 9 }em`	
})

prev.addEventListener('click', () => {
	idx = idx - 1
	
	if(idx == 0){
		prev.disabled = true
		prev.classList.add('disabled')
	}
	else{
		prev.disabled = false
		prev.classList.remove('disabled')
	}

	if(idx < steps.length - 1){
		next.disabled = false
		next.classList.remove('disabled')
	}

	steps[idx + 1].classList.toggle('reachedStep')
	blueLine.style.width = `${ idx * 9 }em`
})