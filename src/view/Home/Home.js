import React from 'react';
import Todo from "../../view/ToDo/TodoList";
import CountDown from "../../view/CountDown/CountDown";

const Home = () => {
  return (
    <div className="container-fluid overflow-hidden h-md-100vh">
      <div className="row gx-5 h-100">
        <div className="col-md-1 text-white order-1 bg-md-secondary bg-dark py-md-5 py-3 d-flex justify-content-center align-items-md-end">
          <h1 className="title mb-0">POMODORO</h1>
        </div>
        <div className="col-md-5 order-md-2 order-3 bg-dark d-flex align-items-center">
          <Todo />
        </div>
        <div className="col-md-6 order-md-3 order-2 bg-secondary py-md-0 py-5">
          <CountDown />
        </div>
      </div>
    </div>  
  )
}

export default Home;
