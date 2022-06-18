const img = document.querySelector('.img')
const countSpan = document.querySelector('.count')

let count = 0

img.addEventListener('dblclick', (ev) => {
	count++
	countSpan.innerHTML = count

	const icon = document.createElement('i')
	icon.classList.add('bi')
	icon.classList.add('bi-heart-fill')
	icon.classList.add('newIcon')
	icon.style.top = `${ev.clientY - 10}px`
	icon.style.left = `${ev.clientX - 5}px`
	img.append(icon)

	setTimeout(() => icon.remove(), 995)
})