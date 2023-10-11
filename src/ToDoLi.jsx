import { useDispatch } from 'react-redux';
import { deleteToDo } from './store';

function ToDoLi({ text, id }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteToDo(id));
  };

  return (
    <div>
      <li>
        {text}
        <button onClick={onClick}>Del</button>
      </li>
    </div>
  );
}

export default ToDoLi;
