import React from 'react';
import TodoList from './components/TodoComponents/TodoList';

import Todo from './components/TodoComponents/Todo'

import TodoForm from './components/TodoComponents/TodoForm'

import { thisExpression } from '@babel/types';
//import todoList constructor from it's relative file

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
    tasks
  };
  }
  
   addItem = (e, Todo) => {
     e.preventDefault();
     const newTodo = {
       name: Todo,
       id: Date.now(),
       done: false
     }; //newItem
     this.setState({
       tasks: [...this.state.tasks, newTodo]
     }); //setState
   };//addItem

   toggleItem = TodoId => {
    console.log(TodoId);
    this.setState({
      lists: this.state.lists.map(item => {
        if (TodoId === Todo.id) {
          return {
            ...Todo, //the spread operator is doing the work for you. That's why name and id are commented out a
            // name: Todo.name,
            // id: Todo.id,
            completed: !Todo.completed
          };
        } // end of if
        return Todo;
      }) // end of map
    });
  };
  
  clearCheckoff = e => {
    e.preventDefault();
    this.setState({
      lists: this.state.lists.filter(Todo => !Todo.completed)
    });
  };


  
  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>To Do List</h1>
          <TodoForm addTodo={this.addTodo} />
        </div>
        <div>
          <TodoList
            clearCompleted={this.clearCompleted}
            toggleTodo={this.toggleTodo}
           lists={this.state.lists}
          />
        </div>
      </div>
    );
  }
}
export default App;

//With props you're passing down your function and things from your state. The data you're using to render in your main application