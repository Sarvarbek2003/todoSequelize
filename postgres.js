const { Sequelize } = require('sequelize')

// let sequelize = new Sequelize('postgres://postgres:2303@localhost:5432/dars_demo')
// let sequelize = new Sequelize({
// 	username: 'postgres',
// 	password: '2303',
// 	host: 'localhost',
// 	database: 'dars_demo',
// 	dialect: 'postgres'
// })

let sequelize = new Sequelize('phocyoze', 'phocyoze', 'MPk9fJKQSU4wxs2iYfhWaQcms5CKlqL8', {
	host: 'kesavan.db.elephantsql.com',
	dialect: 'postgres',
	logging: false
})


/*
	let connection = new Sequelize(postgresSQL)
	let connection = new Sequelize(MySQL)
	let connection = new Sequelize(SQLLite)
*/

// console.log(connection)

!async function () {
	try {
		await sequelize.authenticate()
		console.log('database connected!')
	} catch(error) {
		console.log('Error in connection to database: ' + error.message)
	}
}()

/*
	Integration
	1. with connectionString (URI)
	2. with object params 
	3. with object params and string args
*/

/*
	solarized light
*/

module.exports = sequelize