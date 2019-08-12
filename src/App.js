import React,{Component} from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo';

class App extends Component{
  state = {
    todos : [
      {id:1, content:'Buy some milk'},
      {id:2, content:'Play COD'},
      {id:3, content:'Smoke weed everyday'}
    ]
  }
  deleteTodo = (id) => {
    console.log(id);
    const todos = this.state.todos.filter(el => {
      return el.id !== id
    })
    this.setState({
      todos
    })
  }
  addTodo = (todo) => {
    console.log(todo);
    todo.id = Math.random();
    let todos = [...this.state.todos , todo]
    this.setState({
      todos
    })
  }
  render(){
    return(
      <div className="todo app container">
        <h1 className="center red-text">Todo List</h1>
        <Todo todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
