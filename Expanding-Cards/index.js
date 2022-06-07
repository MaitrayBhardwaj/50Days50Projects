const divs = document.querySelectorAll('div.element')

let currActive = divs[0];

const onClick = (div) => {
	if(div != currActive){
		div.classList.toggle('active')
		currActive.classList.toggle('active')
		currActive = div
	}
}

for(let div of divs){
	div.addEventListener('click', () => { onClick(div) })
}