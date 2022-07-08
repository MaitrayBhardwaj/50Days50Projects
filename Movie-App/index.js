const API_URL = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query='
const imgNA = 'https://2gyntc2a2i9a22ifya16a222-wpengine.netdna-ssl.com/wp-content/uploads/sites/29/2014/12/Image-Not-Available.jpg'

const search = document.querySelector('.search')
const moviesDiv = document.querySelector('.movies')

const generateMovies = (movies) => {
	moviesDiv.innerHTML = ''
	movies.forEach(movie => {
		moviesDiv.innerHTML += `
			<div class="movie" onmouseenter="this.lastElementChild.classList.remove('bottom')"
				onmouseleave="this.lastElementChild.classList.add('bottom')">
				<img src="${movie.backdrop_path ? `${IMG_PATH}${movie.backdrop_path}` : imgNA }" alt="${movie.original_title}">
				<div class="movieInfo">
					<div class="name">${movie.original_title}</div>
					<div class="score ${movie.vote_average >= 8 ? 'good' : movie.vote_average >= 5 ? 'avg' : 'bad'}">${movie.vote_average}</div>
				</div>
				<div class="summary bottom">
					<h3>Overview</h3>
					${movie.overview}
				</div>

			</div>
		`
	})
}

const initialGenerate = async () => {
	const results = await axios.get(API_URL)
	generateMovies(results.data.results)
}

initialGenerate()

search.addEventListener('submit', async (ev) => {
	ev.preventDefault()
	const query = ev.target[0].value
	const results = await axios.get(`${SEARCH_API}${query}`)
	generateMovies(results.data.results)
})