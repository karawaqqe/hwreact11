import React, { Component } from "react";

class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handleChange = (e) => {
    this.setState({ textValue: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.textValue.trim() === "") return;
    this.props.onAdd(this.state.textValue);
    this.setState({ textValue: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className="editor">
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.handleChange}
          placeholder="Нове завдання..."
        />
        <button type="submit">Додати</button>
      </form>
    );
  }
}

export default TodoEditor;
