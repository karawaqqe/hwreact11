import React, { Component } from "react";
import TodoList from "./components/TodoList";
import TodoEditor from "./components/TodoEditor";
import Filter from "./components/Filter";
import Info from "./components/Info";
import "./index.css";

class App extends Component {
  state = {
    todos: [],
    filter: "",
  };

  componentDidMount() {
    const savedTodos = localStorage.getItem("todos");
    if (savedTodos) {
      this.setState({
        todos: JSON.parse(savedTodos),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos !== this.state.todos) {
      localStorage.setItem(
        "todos",
        JSON.stringify(this.state.todos)
      );
    }
  }

  addTodo = (text) => {
    const newTodo = {
      id: Date.now().toString(),
      text,
      completed: false,
    };

    this.setState((prev) => ({
      todos: [...prev.todos, newTodo],
    }));
  };

  deleteTodo = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.filter((todo) => todo.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState((prev) => ({
      todos: prev.todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      ),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.target.value });
  };

  getFilteredTodos() {
    const { todos, filter } = this.state;
    return todos.filter((todo) =>
      todo.text.toLowerCase().includes(filter.toLowerCase())
    );
  }

  render() {
    const todosToShow = this.getFilteredTodos();
    const total = this.state.todos.length;
    const completed = this.state.todos.filter(
      (todo) => todo.completed
    ).length;

    return (
      <div className="container">
        <h1>Телефонна книга / Todo</h1>

        <TodoEditor onAdd={this.addTodo} />

        <Filter
          value={this.state.filter}
          onChange={this.changeFilter}
        />

        <Info total={total} completed={completed} />

        <TodoList
          todos={todosToShow}
          onDelete={this.deleteTodo}
          onToggle={this.toggleCompleted}
        />
      </div>
    );
  }
}

export default App;
