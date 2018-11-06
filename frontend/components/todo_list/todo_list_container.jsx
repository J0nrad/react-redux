import { connect } from 'react-redux';
import TodoList from './todo_list';
import { allTodos } from '../../reducers/selectors';
import { receiveTodo } from '../../actions/todos_actions';

const mapStateToProps = state => ({
  todos: allTodos(state)
});

const mapDispatchToProps = dispatch => ({
  receiveTodo: (todo) => dispatch(recieveTodo(todo))
});

const containerFunc = connect(mapStateToProps, mapDispatchToProps);
const connectedComponent = containerFunc(TodoList);

export default connectedComponent;
