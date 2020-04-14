const connection = require('./../config/connection');
const todoQueries = require('./../models/Todos/todoQueries');


module.exports = {
    getTodos: (req, res) => {
        connection.query(todoQueries.getTodos, (err, todos) => {
            if(err) {
                throw err;
            }
            return res.json(todos);
        });
    },
    insertTodo: (req, res) => {
        const { title } = req.body;
        connection.query(todoQueries.insertTodo, title, (err, dbRes) => {
            if(err) {
                throw err;
            }
            connection.query(todoQueries.getTodos, (err, todos) => {
                if(err) {
                    throw err;
                }
                return res.json(todos);
            });
        });
    },
    deleteTodoById: (req, res) => {
        const { todoId } = req.params;
        connection.query(todoQueries.deleteTodoById, parseInt(todoId), (err, dbRes) => {
            if(err) {
                throw err;
            }
            return res.json({ success: true });
        });
    }
}