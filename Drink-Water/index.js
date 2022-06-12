const glasses = document.querySelectorAll('.glass')
const mainGlass = document.querySelector('.mainGlass')
const glassText = document.querySelector('.glassText')

const rem = document.querySelector('.rem')
const completed = document.querySelector('.completed')

const goal = 2000
const step = 250

let isFirstActive = false
let largest = -1

for(let i = 0; i < glasses.length; i++){
	glasses[i].addEventListener('click', () => {
		let comp = step * (i + 1) / goal
		if(i == 0){
			isFirstActive = !isFirstActive
		}

		if(isFirstActive == false && largest == 0){
			glasses[i].classList.remove('active')
			largest = -1
			comp = 0
		}
		else{
			for(let j = 0; j < glasses.length; j++){
				if(j <= i){
					glasses[j].classList.add('active')
				}
				else{
					glasses[j].classList.remove('active')
				}
			}
			largest = i
		}

		glassText.style.height = `${(1 - comp) * 100}%`
		completed.style.height = `${comp * 100}%`
		if(comp != 0){
			completed.innerHTML = `${comp * 100}%`
		}
		else{
			completed.innerHTML = ''
		}
		rem.innerHTML = `${(1 - comp) * goal / 1000}L`
	})
}