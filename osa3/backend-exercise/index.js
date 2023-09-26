// web service module
const { response } = require('express')
const express = require('express')
const app = express()

//json parser
app.use(express.json())

let notes = [
	{
		id: 1,
		content: "HTML is easy",
		important: true
	},
	{
		id: 2,
		content: "Browser can execute only JavaScript",
		important: true
	},
	{
		id: 3,
		content: "GET and POST are the most important methods in HTTP protocol",
		important: true
	}
]

app.get('/', (request, response) => {
	response.send('<h1>Hello World!</h1>')
})

//handles HTTP GET requests
app.get('/api/notes/:id', (req, res) => {
	const id = Number(req.params.id)
	// console.log(id)
	const note = notes.find(note => note.id === id)
	// console.log(note)
	if (note) {
		res.json(note)
	} else {
		res.status(404).end()
	}
})

// 204 no content
app.delete('/api/notes/:id', (request, response) => {
	const id = Number(request.params.id)
	notes = notes.filter(note => note.id === id )
	response.status(204).end()
})

app.post('/api/notes/', (req, res) => {
	const note = req.body
	console.log(note)
	res.json(note)
})

const PORT = 3001
app.listen(PORT, () => {
	console.log(`Server running in port ${PORT}`)
})