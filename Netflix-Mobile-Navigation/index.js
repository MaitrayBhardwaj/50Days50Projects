const toggleBtns = document.querySelectorAll('.toggleNav')

const navbars = document.querySelectorAll('.navbar')

for(let j = 0; j < toggleBtns.length; j++){
	toggleBtns[j].addEventListener('click', () => {
		let isClosed = navbars[0].classList.contains('w-0')
		for(let i = 0; i < navbars.length; i++){
			navbars[i].classList.toggle('w-0')
			navbars[i].style.transitionDelay = isClosed ? `${(i+1) * 0.25}s` : `${(navbars.length - i) * 0.25}s`
		}
	})
}