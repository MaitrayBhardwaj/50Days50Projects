const rangeVal = document.querySelector('.rangeVal')

const container = document.querySelector('.container')

const rangeStyles = window.getComputedStyle(range)
const divStyles = window.getComputedStyle(rangeVal)

const width = parseFloat(rangeStyles.width.substr(0, rangeStyles.width.length - 2))
const divWidth = parseFloat(divStyles.width.substr(0, divStyles.width.length - 2))

const max = parseInt(range.max)
const min = parseInt(range.min)

let value = parseInt(range.value)

const scale = (num, in_min, in_max, out_min, out_max) => {
	return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

let left = value * (width / max) - divWidth / 2 + scale(value, min, max, 10, -10)

rangeVal.style.left = `${left}px`

range.addEventListener('input', () => {
	value = parseInt(range.value)
    left = value * (width / max) - divWidth / 2 + scale(value, min, max, 10, -10)

	rangeVal.style.left = `${left}px`
	rangeVal.innerHTML = range.value
})
