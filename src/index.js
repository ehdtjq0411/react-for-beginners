import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import TodoList from './TodoList';

ReactDOM.render(
  <React.StrictMode>
    <div>
      <App />
      <TodoList />
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

