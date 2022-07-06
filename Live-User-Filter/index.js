let randomUsers = []

const getRandomUsers = async () => {
	const data = await axios.get('https://randomuser.me/api?results=50')
	randomUsers = data.data.results
}

const users = document.querySelector('.users')

window.addEventListener('load', async () => {
	await getRandomUsers()
	randomUsers.forEach(user => {
		users.innerHTML += `
			<div class="user">
				<img src="${user.picture.thumbnail}">
				<div class="user-info">
					<div class="name">${user.name.first} ${user.name.last}</div>
					<small class="location">${user.location.city}, ${user.location.country}</small>
				</div>	
			</div>
		`
	})
})

const searchbar = document.querySelector('.search-bar')

searchbar.addEventListener('input', (ev) => {
	users.innerHTML = ''
	randomUsers.forEach(user => {
		if(`${user.name.first}${user.name.last}${user.location.city}${user.location.country}`.includes(ev.target.value)){
			users.innerHTML += `
				<div class="user">
					<img src="${user.picture.thumbnail}">
					<div class="user-info">
						<div class="name">${user.name.first} ${user.name.last}</div>
						<small class="location">${user.location.city}, ${user.location.country}</small>
					</div>	
				</div>
			`
		}
	})	
})