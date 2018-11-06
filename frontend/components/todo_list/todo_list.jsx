import React from 'react';
import { allTodos } from '../../reducers/selectors';

export default (props) => {
  const todosArray = allTodos(store.getState()).map((todo, idx) => {
    return(
      <li key={idx}>
        {todo.title}
          <br></br>
        {todo.body}
      </li>
    );
  });


  return (
    <>
    <h3>Todo List Goes Here</h3>
    <ul>
      {todosArray}
    </ul>
    </>
  );
};
