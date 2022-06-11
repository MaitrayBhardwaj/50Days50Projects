const btns = document.querySelectorAll('.expand')
const faqs = document.querySelectorAll('.faq')
const answers = document.querySelectorAll('.answer')

for(let i = 0; i < faqs.length; i++){
	btns[i].addEventListener('click', () => {
		faqs[i].classList.toggle('active')
		answers[i].classList.toggle('visible')
		btns[i].firstChild.classList.toggle('bi-x-circle-fill')
	})
}