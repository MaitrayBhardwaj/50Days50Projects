const btn = document.querySelector('button')
const jokeDiv = document.querySelector('.joke')

const config = {
	headers: {
		Accept: 'application/json'
	}
}

const getNewDadJoke = async () => {
	const data = await axios.get('https://icanhazdadjoke.com/', config)
	return data.data.joke
}

window.addEventListener('load', () => {
	getNewDadJoke()
		.then(res => {
			jokeDiv.innerHTML = res
		})
		.catch(err => {
			console.log(err)
		})
})

btn.addEventListener('click', () => {
	getNewDadJoke()
		.then(res => {
			jokeDiv.innerHTML = res
		})
		.catch(err => {
			console.log(err)
		})
})