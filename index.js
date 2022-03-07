const { TodosModel } = require('./models.js')
const express = require('express')
const PORT = process.env.PORT || 8000
const app = express()
app.use( express.json() )

app.get('/todos', async (req, res) => {
	try{
		const { search } = req.query
		let todos = await TodosModel.findAll()
		if (search) todos = todos.filter( todo => todo.title.includes(search))
		res.json( todos )

	}catch(err){
		console.log(err)
	}
})
app.get('/todos/:todosId', async (req, res) => {
	try{
		const { todoId } = req.params
		let todos = await TodosModel.findAll({where: { todos_id: todoId}})
		res.json( todos )

	}catch(err){
		console.log(err)
	}
})

app.post('/todos', async (req, res) => {
	try{
		let todo = await TodosModel.create(req.body)
		res.json({
			message: 'OK',
			data: todo
		})

	}catch(err){
		console.log(err)
	}
})

app.put('/todos/:todoId', async (req, res) => {
	try{
		const { todoId } = req.params
		let { title, todo, doing, done } = req.body
		todo = todo || false
		doing = doing || false
		done = done || false
		let todos = await TodosModel.update({title, todo, doing, done}, { where: { todos_id: todoId }, returning: true })
		res.json({
			message: 'OK',
			data: todos
		})

	}catch(err){
		console.log(err)
	}
})

app.delete('/todos/:todoId', async (req, res) => {
	try{
		const { todoId } = req.params
		let todo = await TodosModel.destroy({ where: { todos_id: todoId },returning: true })
		res.json({
			message: 'OK',
			data: todo
		})
	}catch(err){
		console.log(err)
	}
})


app.listen(PORT, () => console.log('*8000'))


/*
	ToDO app

	Todo {
		todoId
		todoBody
		todoCreatedAt
	}


	GET
	/todos                 Array<Todo>
	/todos/:todoId         <Todo>
	/todos/?search="key"   Array<Todo>

	POST
	/todos [todoBody]

	PUT
	/todos/:todoId [todoBody]

	DELETE
	/todos/:todoId
*/