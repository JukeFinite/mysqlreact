import React from "react";
// import Counter from './../../components/Counter';]\
import { BrowserRouter as Router, Route } from 'react-router-dom';

import TodoForm from "../../containers/TodoForm";
import Counter from "../../containers/Counter";
import Comments from "../../containers/Comments";
import Navbar from './../Navbar';
import TodoListItem from './../../containers/TodoListItem';

const App = props => (
  <Router>
    <div className="container">
      <Navbar/>
      <Counter/>
      <Route exact path="/" component={TodoForm}/>
      <Route exact path="/todo/:id" component={TodoListItem}></Route>  
    </div>
  </Router>
);
export default App;