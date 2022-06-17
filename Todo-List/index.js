const form = document.querySelector('form')
const todos = document.querySelector('.todos')

const toggleCompleted = (todo) => {
	todo.classList.toggle('completed')
}

const removeTodo = (todo) => {
	todo.remove()
}

form.addEventListener('submit', (ev) => {
	ev.preventDefault()
	const value = ev.target[0].value
	if(value !== ''){
		const todo = document.createElement('div')
		todo.classList.add('todo')
		todo.innerHTML = ev.target[0].value
		form.firstElementChild.value = ''
		todo.addEventListener('click', (ev) => {
			ev.preventDefault()
			toggleCompleted(todo)
		})
		todo.addEventListener('contextmenu', (ev) => {
			ev.preventDefault()
			removeTodo(todo)
		})
		todos.append(todo)
	}
})