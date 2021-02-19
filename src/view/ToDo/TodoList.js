import React, { useState, useMemo } from 'react';
import Todo from '../../components/Todo/Todo';

const TodoList = (props) => {
  const todos = props.todos;
  const [filterType, setFilterType] = useState('all');

  const [inputValue, setInputValue] = useState('');
  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function checkActiveItem(event) {
    const target = event.target.nodeName;
    if (target === 'BUTTON' || target === 'I') {
      props.onStartCount(event.target.dataset.id);
    }
  }
  function addTodo() {
    if (inputValue !== '') {
      props.onAddTodoItem(inputValue);
      setInputValue('');
    }
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
      <ul className="list-group" onClick={checkActiveItem}>
        {displayData.map((value, key) => {
          return <Todo data={value} id={value.id} key={key} handler={props.onStateChange} active={props.nowItem.id === value.id} />
        })}
      </ul>
      <p className="mt-3 text-primary text-right"> 共有 {todos.length} 項任務</p>
    </div>
  );
}

export default TodoList;