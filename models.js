const { DataTypes, Model } = require('sequelize')
const sequelize = require('./postgres.js')

// const TodosModel = sequelize.define('User', {
// 	user_id: {
// 		type: DataTypes.INTEGER,
// 		autoIncrement: true,
// 		allowNull: false,
// 		primaryKey: true
// 	},
// 	username: DataTypes.STRING(30),
// 	age: DataTypes.INTEGER
// }, {
// 	tableName: 'clients'
// })

// TodosModel.sync()



class TodosModel extends Model {}

TodosModel.init({
	todos_id: {
		type: DataTypes.INTEGER,
		autoIncrement: true,
		allowNull: false,
		primaryKey: true
	},
	title: {
		type: DataTypes.STRING(100),
		allowNull: false,
		validate: {
			len: {
				args: [1, 100],
				msg: "Title uzunligi shartga to`gri kelmaydi"
			}
		}
	},
	todo: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: true
	},
	doing: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	},
	done: {
		type: DataTypes.BOOLEAN,
		allowNull: false,
		defaultValue: false
	}
}, { sequelize, tableName: 'todos' })




/*
	Model
	1. sequelize.define(modelName, attributes, options)
	2. extending Model class and calling its static init method
*/


/*
	1. Integration
	2. Model - class
*/

module.exports = {
	TodosModel
}