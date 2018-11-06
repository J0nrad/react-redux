import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';
import { receiveTodo, receiveTodos } from './actions/todos_actions';
import Root from './components/root'



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Root />,
    document.getElementById('root')
  );
});


window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
