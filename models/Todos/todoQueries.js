const insertTodo = "INSERT INTO todos (title) VALUES (?);";
const getTodos = "SELECT * FROM todos;";
const getTodoById = "SELECT * FROM todos WHERE id = ?;";


module.exports = {
    insertTodo,
    getTodos,
    getTodoById
};