import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ''
        }
    }

    handleChanges = e => {
        this.setState({
            newTodo: e.target.value
        })
    };

    handleSubmit = e => {
        e.preventDefault();
        this.props.addNewTodo(this.state.newTodo);
        this.setState({ newTodo: ''});
    }


    render() {
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        placeholder="ex: study react"
                        name="newTodo"
                        value={this.state.newTodo}
                        onChange={this.handleChanges}
                    />
                    <button>Add</button>
                </form>
            </div>
        )
    }
}

export default TodoForm;