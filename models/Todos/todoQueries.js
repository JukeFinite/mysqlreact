const insertTodo = "INSERT INTO todos (title) VALUES (?);";
const getTodos = "SELECT * FROM todos;";

module.exports = {
    insertTodo,
    getTodos
};