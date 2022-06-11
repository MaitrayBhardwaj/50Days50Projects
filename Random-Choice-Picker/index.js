const text = document.querySelector('textarea')
const choices = document.querySelector('.choices')

let nodes = []
let currNode, lastWinner = -1, makeNewNode = false, writeFresh = false

const chooseWinner = (nodes) => {
	const winner = Math.floor(Math.random() * nodes.length)
	return winner
}

text.addEventListener('keydown', (ev) => {
	const { key } = ev

	if(key == "Enter"){
		const timerID = setInterval(() => {
			const winner = chooseWinner(nodes)
			nodes[winner].classList.add('active')
			if(lastWinner != -1 && winner !== lastWinner){
				nodes[lastWinner].classList.remove('active')
			}
			lastWinner = winner
		}, 100)
		text.value = ""
		setInterval(() => {
			clearInterval(timerID)
			text.value = text.value.replace("\n", "");
		}, 2000)
		writeFresh = true
		return
	}

	if(writeFresh){
		nodes.forEach(node => {
			node.remove()
		})
		nodes = []
		lastWinner = -1
		writeFresh = false
	}

	if(text.value === ""){
		if(key != "," && key.length == 1){
			currNode = document.createElement('div')
			currNode.classList.toggle('choice')
			currNode.innerHTML += key
			nodes.push(currNode)
			choices.append(currNode)
		}
	}
	else{
		if(key == "Backspace"){
			if(text.value[text.value.length - 1] === ","){
				makeNewNode = false
			}
			else if(text.value == ""){
				nodes.forEach(node => {
					node.remove()
				})
				nodes = []
				lastWinner = -1
			}
			else{
				currNode.innerHTML = currNode.innerHTML.slice(0, -1)
				if(currNode.innerHTML === ""){
					currNode.remove()
					nodes.pop()
					currNode = nodes[nodes.length - 1]
				}
			}
		}
		else if(key !== "," && key.length == 1){
			if(makeNewNode){
				currNode = document.createElement('div')
				currNode.classList.toggle('choice')
				currNode.innerHTML += key
				nodes.push(currNode)
				choices.append(currNode)
				makeNewNode = false
			}
			else{
				currNode.innerHTML += key
			}
		}
		else if(key === ","){
			makeNewNode = true
		}
	}
})