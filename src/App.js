// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './view/Home/Home';
import './assets/stylesheets/all.scss';

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" component={Home} />
    </BrowserRouter>
  )
}
export default App;
