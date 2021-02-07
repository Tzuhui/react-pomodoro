import React, { useState, useMemo } from 'react';
import Todo from '../../components/Todo/Todo';

const TodoList = () => {
  const [filterType, setFilterType] = useState('all');

  const [inputValue, setInputValue] = useState('');
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  const [todos, setTodos] = useState([
    { id: 1, text: 'Write Some Code', active: false },
    { id: 2, text: 'Running', active: false },
    { id: 3, text: 'Play Baskebtall', active: false },
  ])

  function addTodo() {
    if (inputValue !== '') {
      const todoLength = todos.length;
      setTodos([...todos, {
        id: todoLength + 1,
        text: inputValue,
        active: false
      }])
      setInputValue('');
    }
  }
  function changeState(event) {
    let todosList = todos;
    const index = todos.findIndex(data => data.id === parseInt(event.target.id));
    if (todosList[index].active) {
      todosList[index].active = false
    } else {
      todosList[index].active = true
    }
    setTodos([...todosList]);
  }
  const displayData = useMemo(() => {
    if (filterType !== 'all') {
      if (filterType === 'completed') {
        return todos.filter(todo => todo.active)
      } else {
        return todos.filter(todo => !todo.active)
      }
    } else {
      return todos
    }
  }, [filterType, todos]);

  return (
    <div className="py-md-5 py-3 px-md-4 w-100">
      <h2 className="text-primary h1">Task List</h2>
      <div className="input-group mt-md-5 mt-3">
        <input type="text" className="form-control" placeholder="新增 Todo" value={inputValue} onChange={handleChange} />
        <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => addTodo()}>Add</button>
      </div>
      <div className="btn-group mb-3 mt-md-5 mt-3" role="group" aria-label="Basic outlined example">
        <button type="button"
          className={'btn btn-outline-primary ' + (filterType === "all" ? "active" : "")}
          onClick={() => setFilterType('all')}>全部</button>
        <button type="button"
          className={'btn btn-outline-primary ' + (filterType === "left" ? "active" : "")}
          onClick={() => setFilterType('left')}>未完成</button>
        <button type="button"
          className={'btn btn-outline-primary ' + (filterType === "completed" ? "active" : "")}
          onClick={() => setFilterType('completed')}>完成</button>
      </div>
      <ul className="list-group">
        {displayData.map((value, key) => {
          return <Todo data={value} id={value.id} key={key} handler={changeState} />
        })}
      </ul>
      <p className="mt-3 text-primary text-right"> 共有 {todos.length} 項任務</p>
    </div>
  );
}

export default TodoList;