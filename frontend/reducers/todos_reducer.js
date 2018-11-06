import {
  RECEIVE_TODOS,
  RECEIVE_TODO
} from '../actions/todos_actions'
import { merge } from 'lodash'

const initialState = {
   1: {
     id: 1,
     title: 'wash car',
     body: 'with soap',
     done: false
   },
   2: {
     id: 2,
     title: 'wash dog',
     body: 'with shampoo',
     done: true
  },
};

const todosReducer = (oldState = initialState, action) => {
  switch(action.type) {
    case RECEIVE_TODOS: {
      const nextState = {};
      action.todos.forEach((todo) => {
        nextState[todo.id] = todo
      });
      return nextState;
    }

    case RECEIVE_TODO: {
      const nextState = merge({}, oldState)
      nextState[action.todo.id] = action.todo;
      return nextState;
    }
    default:
      return oldState;
  };
};

export default todosReducer;
