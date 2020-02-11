import React from 'react';
// can also use import React, { Component } from "react"; it's a component and would change line 5 to
// class App extends Component {}

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./components/Todo.css";


class App extends React.Component { // "C" declare your class (CCR)
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() { // "C" build out your "CONSTRUCTOR"
    super();
    this.state = {
      todoList: [
        {
          todo: "",
          id: Date.now(),
          completed: false
        }
      ]
    };
  }

  toggleItem = clickedId => {
    const newTodoList = this.state.todoList.map(item => {
      if(item.id === clickedId) {
        return {
          ...item,
          completed: !item.completed
        };
      } else {
        return item
      }
    });

    // return newTodoList;
    this.setState({
      todoList: newTodoList
    })
  }

  addNewTodo = todoItem => {
    const newTodo = {
      todo: todoItem,
      id: Date.now(),
      completed: false
    }
    this.setState({
      todoList: [...this.state.todoList, newTodo]
    });
  }

  clearCompleted = () => {
    this.setState({
      todoList: this.state.todoList.filter(todo =>
        !todo.completed)
    });
  }

  render() { // "R" don't forget to call "RENDER"
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm 
          addNewTodo={this.addNewTodo}
          
        />
        <TodoList 
          todo={this.state.todoList} 
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />
      </div>
    );
  }
}

export default App;