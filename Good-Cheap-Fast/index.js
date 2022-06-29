const checkBoxes = document.querySelectorAll('input[type="checkbox"]')

const checkedStatus = []

for(let checkBox of checkBoxes){
	checkedStatus.push(checkBox.checked)
}

const allChecked = (arr) => {
	return arr.reduce((curr, res) => {
		return res && curr
	})
}

for(let i = 0; i < checkBoxes.length; i++){
	checkBoxes[i].addEventListener('change', () => {
		checkedStatus[i] = checkBoxes[i].checked
		if(allChecked(checkedStatus)){
			let rand = Math.floor(Math.random() * checkedStatus.length)
			if(rand === i){
				if(i === 0){
					rand++
				}
				if(i === checkedStatus.length - 1){
					rand--
				}
			}
			checkBoxes[rand].checked = false
		}
	})
}