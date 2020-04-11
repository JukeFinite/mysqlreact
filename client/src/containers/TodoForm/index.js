import React, { Component } from "react";
import axios from 'axios';
// Component exports
import ListItem from "../../components/TodoListItems";
class TodoForm extends Component {
  state = {
    input: "",
    todos: [],
  };
  componentDidMount() {
    this.fetchTodos();
  }
  handleInputChange = (e) => {
    const { value } = e.target;
    this.setState({ input: value });
  };
  handleSubmit = (e) => {

    e.preventDefault();
    console.log("I happened")
    const newTodo = {id: 1, userId: 1, completed: false, title: this.state.input}
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      const todos = [...res.data, newTodo];
      this.setState({ todos });
    });
  };
  fetchTodos = () => {
    axios.get('https://jsonplaceholder.typicode.com/todos').then(res => {
      console.log(res);
      this.setState({todos: res.data});
    });
  }
  render() {
    return (
      <div>
        <form>
          <div className="form-group">
            <label>Todos</label>
            <input
              onChange={this.handleInputChange}
              value={this.state.input}
              className="form-control"
              id="exampleInputEmail1"
            />
          </div>
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Submit
          </button>
        </form>
        <ListItem items={this.state.todos} />
      </div>
    );
  }
}
export default TodoForm;