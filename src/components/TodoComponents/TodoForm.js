import React from 'react';

class TodoForm extends React.Component {
    constructor() {
      super();
      this.state = {
        Todo: ""
      };
    }

    handleChanges = e => {
        console.log(e.target.value);
        this.setState({ [e.target.name]: e.target.value });
      };

      submitTodo = e => {
        this.props.addTodo(e, this.state.Todo);
        this.setState({ Todo: "" });
      };

      render() {
        return (
          <form onSubmit={this.submitTodo}>
            <input
              type="text"
              name="Todo"
              placeholder="To Do"
              value={this.state.Todo}
              onChange={this.handleChanges}
            />
            <button>Add</button>
          </form>
        );
      }
    }

    export default TodoForm;