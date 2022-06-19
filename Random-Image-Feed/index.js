const url = 'https://source.unsplash.com/random/'
const imgCount = 9

const images = document.querySelector('.images')

for(let i = 0; i < imgCount; i++){
	const img = document.createElement('img')
	const rand = Math.floor(Math.random() * 1000 + 200)
	img.src = `${url}${rand}x${rand}`
	images.append(img)
}