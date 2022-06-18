const url = 'https://api.github.com/users/'

const form = document.querySelector('form')

const avatar = document.querySelector('.avatar')
const name = document.querySelector('.name')
const desc = document.querySelector('.desc')
const followerCount = document.querySelector('.followerCount')
const followingCount = document.querySelector('.followingCount')
const repoCount = document.querySelector('.repoCount')
const repoList = document.querySelector('.repoList')

const getUserData = async (username) => {
	let res
	try{
		res = await axios.get(`${url}${username}`)
	}
	catch(err) {
		return null
	}
	return res.data
}

const getUserRepoData = async (repoURL) => {
	const res = await axios.get(repoURL)
	return res.data
}

form.addEventListener('submit', async (ev) => {
	ev.preventDefault()
	const username = ev.target[0].value
	const data = await getUserData(username)
	form.firstElementChild.value = ''
	if(data !== null){
		userNotFound.classList.add('d-none')
		name.innerHTML = data.login
		avatar.src = data.avatar_url
		desc.innerHTML = data.bio
		followerCount.innerHTML = data.followers
		followingCount.innerHTML = data.following
		repoCount.innerHTML = data.public_repos
		user.classList.remove('d-none')
		const repoData = await getUserRepoData(data.repos_url)
		repoList.innerHTML = ''
		for(let i = 0; i < 5; i++){
			const repo = document.createElement('a')
			repo.href = repoData[i].html_url
			repo.innerHTML = repoData[i].name
			repoList.append(repo)
		}
	}
	else{
		user.classList.add('d-none')
		userNotFound.classList.remove('d-none')
	}
})