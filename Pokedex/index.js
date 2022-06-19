const pokeURL = `https://pokeapi.co/api/v2/pokemon/`
const pokemons = document.querySelector('.pokemons')
const totalPokemon = 150

const colors = {
    Fire: '#FDDFDF',
    Grass: '#DEFDE0',
	Electric: '#FCF7DE',
	Water: '#DEF3FD',
	Ground: '#f4e7da',
	Rock: '#d5d5d4',
	Fairy: '#fceaff',
	Poison: '#98d7a5',
	Bug: '#f8d5a3',
	Dragon: '#97b3e6',
	Psychic: '#eaeda1',
	Flying: '#F5F5F5',
	Fighting: '#E6E0D4',
	Normal: '#F5F5F5'
}

const getPokemonData = async (id) => {
	const data = await axios.get(`${pokeURL}${id}`)
	return data.data
}

const toTitleCase = (str) => {
	const temp = str.split('')
	temp[0] = temp[0].toUpperCase()
	return temp.join('')
}

const getID = (i) => {
	let temp = `${i}`.split('')
	let len = temp.length
	for(let i = 0; i <= (Math.floor(Math.log10(totalPokemon)) - len); i++){
		temp.unshift('0')
	}
	return temp.join('')
}

const buildPokedex = async () => {
	for(let i = 1; i <= totalPokemon; i++){
		const data = await getPokemonData(i)

		const type = toTitleCase(data.types[0].type.name)

		pokemons.innerHTML += `
			<div class="pokemon" style="background-color: ${colors[type]}">
				<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png" class="pokeImg">
				<div class="id">#${getID(i)}</div>
				<div class="pokeName">${toTitleCase(data.name)}</div>
				<div class="pokeType">Type: <span class="type">${type}</span></div>
			</div>
		`
	}
}

buildPokedex()