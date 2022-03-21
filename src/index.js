import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList';
import CoinTracker from './CoinTracker';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <CoinTracker />
      <App />
      <TodoList />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

