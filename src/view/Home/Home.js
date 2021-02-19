import React, { useState } from 'react';
import Todo from "../../view/ToDo/TodoList";
import CountDown from "../../view/CountDown/CountDown";

const Home = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Write Some Code', active: false },
    { id: 2, text: 'Running', active: false },
    { id: 3, text: 'Play Baskebtall', active: false },
  ])
  const [tempItem, setTempItem] = useState({
    id: 0,
    text: '請先選擇一個待辦事項',
    active: false,
  })

  const addTodo = (value) => {
    const todoLength = todos.length;
    setTodos([...todos, {
      id: todoLength + 1,
      text: value,
      active: false
    }])
  }

  const finishTodo = (id) => {
    let todosList = todos;
    const index = todos.findIndex(data => data.id === parseInt(id));
    todosList[index].active = true
    setTodos([...todosList]);
  }

  const startCount = (id) => {
    const filteredData = todos.filter(item => item.id === parseInt(id));
    setTempItem(filteredData[0])
  }

  const todoStateChange = (event) => {
    let todosList = todos;
    const index = todos.findIndex(data => data.id === parseInt(event.target.id));
    if (todosList[index].active) {
      todosList[index].active = false
    } else {
      todosList[index].active = true
    }
    setTodos([...todosList]);
  }
  
  return (
    <div className="container-fluid overflow-hidden h-md-100vh">
      <div className="row gx-5 h-100">
        <div className="col-md-1 text-white order-1 bg-md-secondary bg-dark py-md-5 py-3 d-flex justify-content-center align-items-md-end">
          <h1 className="title mb-0">POMODORO</h1>
        </div>
        <div className="col-md-5 order-md-2 order-3 bg-dark d-flex align-items-center">
          <Todo todos={todos} onStateChange={todoStateChange} onAddTodoItem={addTodo} onStartCount={startCount} nowItem={tempItem} />
        </div>
        <div className="col-md-6 order-md-3 order-2 bg-secondary py-md-0 py-5">
          <CountDown nowItem={tempItem} complete={finishTodo} reStart={() => {
            setTempItem({
              id: 0,
              text: '請先選擇一個待辦事項',
              active: false,
            })
          }} />
        </div>
      </div>
    </div>  
  )
}

export default Home;
