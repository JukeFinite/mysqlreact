const router = require('express').Router();


// /api/todos prepended to every route


const todoQueries = require('./../../../models/Todos/todoQueries');

const connection = require('./../../../config/connection');


// router.route('/')
//     .get(todosController.getTodos)
//     .post(todosController.insertTodo);
router.get('/', (req, res) => {
    connection.query(todoQueries.getTodos, (err, todos) => {
        res.json(todos);
    });
});

// router.post('/', (req, res) => {
//     const { title } = req.body;

//     connection.query(todoQueries.insertTodo, title, (err, responseFromDb) => {
//         // This needs to be done on a DELETE REQUEST, UPDATE REQUEST, OR A POST REQUEST
//         connection.query(todoQueries.getTodos, (err, todos) => {
//             res.json(todos);
//         });
//     });
// });

module.exports = router;
