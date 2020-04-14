const router = require('express').Router();

const todosController = require('./../../../controllers/todosController');
// /api/todos prepended to every route



router.route('/')
    .get(todosController.getTodos)
    .post(todosController.insertTodo);


router.route('/:todoId')
    .delete(todosController.deleteTodoById);

    
// router.get('/', (req, res) => {
//     connection.query(todoQueries.getTodos, (err, todos) => {
//         res.json(todos);
//     });
// });

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
