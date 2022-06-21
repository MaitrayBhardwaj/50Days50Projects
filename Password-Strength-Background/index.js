const ini = 40, visLen = 10

pass.addEventListener('input', () => {
	const len = pass.value.length
	document.body.style.backdropFilter = `blur(${ini - len/visLen * ini}px)`
})