const btn = document.querySelector('button')

btn.addEventListener('click', (ev) => {
	const { offsetX, offsetY } = ev
	const ripple = document.createElement('div')
	ripple.classList.add('ripple')
	ripple.style.top = `${offsetY}px`
	ripple.style.left = `${offsetX}px`
	btn.append(ripple)

	setTimeout(() => ripple.remove(), 995)
})