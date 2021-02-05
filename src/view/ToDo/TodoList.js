import React, { Component } from 'react';
import Todo from '../../components/Todo/Todo';

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [
        { id: 1, text: 'Write Some Code', active: false },
        { id: 2, text: 'Running', active: false },
        { id: 3, text: 'Play Baskebtall', active: false },
      ],
      filterType: 'all',
      inputValue: '',
    };
    this.changeState = this.changeState.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  changeState(event) {
    let todosList = this.state.todos;
    const index = this.state.todos.findIndex(data => data.id === parseInt(event.target.id));
    if (todosList[index].active) {
      todosList[index].active = false
    } else {
      todosList[index].active = true
    }
    this.setState({ todos: todosList })
  }
  addTodo() {
    const todoLength = this.state.todos.length;
    this.state.todos.push({
      id: todoLength + 1,
      text: this.state.inputValue,
      active: false
    });
    this.setState({ todos: this.state.todos });
    this.setState({ inputValue: '' });
  }
  get displayData() {
    if (this.state.filterType !== 'all') {
      if (this.state.filterType === 'completed') {
        return this.state.todos.filter(todo => todo.active)
      } else {
        return this.state.todos.filter(todo => !todo.active)
      }
    } else {
      return this.state.todos
    }
  }
  render() {
    return (
      <div className="py-md-5 py-3 px-md-4 w-100">
        <h2 className="text-primary h1">Task List</h2>
        <div className="input-group mt-md-5 mt-3">
          <input type="text" className="form-control" placeholder="新增 Todo" value={this.state.inputValue} onChange={this.handleChange} />
          <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => this.addTodo()}>Add</button>
        </div>
        <div className="btn-group mb-3 mt-md-5 mt-3" role="group" aria-label="Basic outlined example">
          <button type="button"
            className={'btn btn-outline-primary ' + (this.state.filterType === "all" ? "active" : "")}
            onClick={() => this.setState({ filterType: 'all' })}>全部</button>
          <button type="button"
            className={'btn btn-outline-primary ' + (this.state.filterType === "left" ? "active" : "")}
            onClick={() => this.setState({ filterType: 'left' })}>未完成</button>
          <button type="button"
            className={'btn btn-outline-primary ' + (this.state.filterType === "completed" ? "active" : "")}
            onClick={() => this.setState({ filterType: 'completed' })}>完成</button>
        </div>
        <ul className="list-group">
          {this.displayData.map((value, key) => {
            return <Todo data={value} id={value.id} key={key} handler={this.changeState} />
          })}
        </ul>
        <p className="mt-3 text-primary text-right"> 共有 {this.state.todos.length} 項任務</p>
      </div>
    );
  }
}

export default TodoList;