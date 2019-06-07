// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';


const TodoList = props => {
    return (
      <div className="Todo-list">
        {props.tasks.map(Todo => (
          <Todo toggleTodo={props.toggleTodo} key={Todo.id} Todo={Todo} />
        ))}
        <button className="clear-btn" onClick={props.clearCompleted}>
          Clear Purchased
        </button>
      </div>
    );
  };

export default TodoList;