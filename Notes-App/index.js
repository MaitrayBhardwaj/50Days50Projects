const notesDiv = document.querySelector('.notes')

const addNote = document.querySelector('.addNote')

const createNewNote = () => {
	const newNote = document.createElement('div')
	let isEditable = true
	let body = ''

	newNote.className = 'note'

	newNote.innerHTML = `
		<div class="navbar"><i class="bi bi-pencil-square editNote" title="Toggle Edit Mode"></i><i title="Delete Note" class="bi bi-trash deleteNote"></i></div>
		<div class="noteContent ${ isEditable && 'd-none'}">${ body }</div>
		<textarea spellcheck="false" class="noteContent ${ isEditable === true ? '' : 'd-none' }">${ body }</textarea>
	`

	const textarea = newNote.querySelector('textarea')
	const noteContentDiv = newNote.querySelector('.noteContent')

	textarea.focus()

	textarea.addEventListener('change', (ev) => {
		body = ev.target.value
		textarea.innerHTML = body
		noteContentDiv.innerHTML = body
	})

	const delNote = newNote.querySelector('.deleteNote')
	const editNote = newNote.querySelector('.editNote')

	editNote.addEventListener('click', () => {
		isEditable = !isEditable
		noteContentDiv.classList.toggle('d-none')
		textarea.classList.toggle('d-none')
		textarea.focus()
	})

	delNote.addEventListener('click', () => {
		newNote.remove()
	})

	notesDiv.append(newNote)
}

addNote.addEventListener('click', createNewNote)