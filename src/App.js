import React from 'react';
import TodoList from './components/TodoComponents/TodoList';
//import todoList constructor from it's relative file

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    tasks: [
      {
        task: 'Do Stuff 0',
        id: 1233,
        completed: false
    },
  
    {
        task: 'Do Stuff 1',
        id: 1231,
        completed: false
    },
  
    {
        task: 'Do Stuff 2',
        id: 1232,
        completed: false
    },
  
    {
        task: 'Do Stuff 3',
        id: 1233,
        completed: false
    },
  
    {
        task: 'Do Stuff 4',
        id: 1233,
        completed: false
    }
    ]
  }
   
  


  
  render() {
    return (
      <div className = "App" >
        <h2>To Do List</h2>
      {/* {this.state.tasks.map(taskObj => <p>{taskObj.task}</p>)} */}
      <TodoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;

//With props you're passing down your function and things from your state. The data you're using to render in your main application