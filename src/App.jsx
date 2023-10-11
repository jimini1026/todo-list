import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo } from './store';
import ToDoLi from './ToDoLi';

function App() {
  const [toDo, setToDo] = useState('');
  const toDos = useSelector((state) => state);
  console.log(toDos);
  const dispatch = useDispatch();

  const onChange = (e) => {
    setToDo(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === '') {
      return;
    }
    dispatch(addToDo(toDo));
    setToDo('');
  };

  return (
    <div>
      <h1 className="bg-blue-500">ToDoList</h1>
      <div>
        <form onSubmit={onSubmit}>
          <input value={toDo} onChange={onChange} placeholder="write your todo" required />
          <button>Add</button>
        </form>
        <ul>
          {toDos.map((todo) => (
            <ToDoLi key={todo.id} text={todo.text} id={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
