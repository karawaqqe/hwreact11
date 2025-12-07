import React, { Component } from "react";
import todosData from "./data/todo.json";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import Info from "./components/Info";
import { Modal } from "./components/modal/Modal";
import "./index.css";

class App extends Component {
  state = {
    todos: todosData,
    filter: "",
    showmodal: true,
  };

  addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };
    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  deleteTodo = (id) => {
    this.setState({ todos: this.state.todos.filter((todo) => todo.id !== id) });
  };

  toggleCompleted = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      ),
    });
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTodos = () => {
    return this.state.todos.filter((todo) =>
      todo.text.toLowerCase().includes(this.state.filter.toLowerCase())
    );
  };

  toggleModal = () => {
    this.setState(({showModal}) => {

    })
  }

  render() {
    const todosToShow = this.getFilteredTodos();
    const total = this.state.todos.length;
    const completed = this.state.todos.filter((t) => t.completed).length;

    return (
      <div className="container">
        {/* <h1>Список завдань</h1>
        <TodoEditor onAdd={this.addTodo} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Info total={total} completed={completed} />
        <TodoList
          todos={todosToShow}
          onDelete={this.deleteTodo}
          onToggle={this.toggleCompleted}
        /> */}
        <button type="button">

        </button>
        {this.state.showmodal &&  <Modal />}
      </div>
    );
  }
}

export default App;
