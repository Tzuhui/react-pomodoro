import React, { useState, useEffect } from 'react';
import './styles.css'

const CountDown = () => {
  const [second, setCounter] = useState(20);
  let [circleDasharray, setCircleDasharray] = useState(`283 283`)

  // 倒數
  useEffect(() => {
    const timer =
      second > 0 && setInterval(() => {
        setCounter(second - 1)
      }, 1000);
    setCircleDasharray(`${(
      (second / 20) * 283
    ).toFixed(0)} 283`);
    return () => clearInterval(timer);
  }, [second]);

  return (
    <div class="h-100">
      <div className="d-flex align-items-center justify-content-center h-100">
        <div className="base-timer">
          <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <g className="base-timer__circle">
              <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
              <path
                id="base-timer-path-remaining"
                strokeDasharray={circleDasharray}
                className="base-timer__path-remaining text-primary"
                d="
              M 50, 50
              m -45, 0
              a 45,45 0 1,0 90,0
              a 45,45 0 1,0 -90,0
            "
              ></path>
            </g>
          </svg>
          <span id="base-timer-label" className="base-timer__label">
            <p> 00:{second} </p>
          </span>
        </div>
      </div>
    </div>
  )
}
// className TodoList extends Component {
//   constructor() {
//     super();
//     this.state = {
//       todos: [
//         { id: 1, text: 'Write Some Code', active: false },
//         { id: 2, text: 'Running', active: false },
//         { id: 3, text: 'Play Baskebtall', active: false },
//       ],
//       filterType: 'all',
//       inputValue: '',
//     };
//     this.changeState = this.changeState.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ inputValue: event.target.value });
//   }
//   changeState(event) {
//     let todosList = this.state.todos;
//     const index = this.state.todos.findIndex(data => data.id === parseInt(event.target.id));
//     if (todosList[index].active) {
//       todosList[index].active = false
//     } else {
//       todosList[index].active = true
//     }
//     this.setState({ todos: todosList })
//   }
//   addTodo() {
//     const todoLength = this.state.todos.length;
//     this.state.todos.push({
//       id: todoLength + 1,
//       text: this.state.inputValue,
//       active: false
//     });
//     this.setState({ todos: this.state.todos });
//     this.setState({ inputValue: '' });
//   }
//   get displayData() {
//     if (this.state.filterType !== 'all') {
//       if (this.state.filterType === 'completed') {
//         return this.state.todos.filter(todo => todo.active)
//       } else {
//         return this.state.todos.filter(todo => !todo.active)
//       }
//     } else {
//       return this.state.todos
//     }
//   }
//   render() {
//     return (
//       <div className="py-md-5 py-3 px-md-4">
//         <h2 className="text-primary">Task List</h2>
//         <div className="input-group mt-5">
//           <input type="text" className="form-control" placeholder="新增 Todo" value={this.state.inputValue} onChange={this.handleChange} />
//           <button className="btn btn-primary" type="button" id="button-addon2" onClick={() => this.addTodo()}>Add</button>
//         </div>
//         <div className="btn-group mb-3 mt-5" role="group" aria-label="Basic outlined example">
//           <button type="button"
//             className={'btn btn-outline-primary ' + (this.state.filterType === "all" ? "active" : "")}
//             onClick={() => this.setState({ filterType: 'all' })}>全部</button>
//           <button type="button"
//             className={'btn btn-outline-primary ' + (this.state.filterType === "left" ? "active" : "")}
//             onClick={() => this.setState({ filterType: 'left' })}>未完成</button>
//           <button type="button"
//             className={'btn btn-outline-primary ' + (this.state.filterType === "completed" ? "active" : "")}
//             onClick={() => this.setState({ filterType: 'completed' })}>完成</button>
//         </div>
//         <ul className="list-group">
//           {this.displayData.map((value, key) => {
//             return <Todo data={value} id={value.id} key={key} handler={this.changeState} />
//           })}
//         </ul>
//         <p className="mt-3 text-primary text-right"> 共有 {this.state.todos.length} 項任務</p>
//       </div>
//     );
//   }
// }

export default CountDown;