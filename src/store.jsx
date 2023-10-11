import { legacy_createStore } from 'redux';
import { v4 as uuidv4 } from 'uuid';

export const addToDo = (text) => {
  return {
    type: 'addToDo',
    text,
  };
};

export const deleteToDo = (id) => {
  return {
    type: 'deleteToDo',
    id,
  };
};

const reducer = (toDos = [], action) => {
  switch (action.type) {
    case 'addToDo':
      return [...toDos, { text: action.text, id: uuidv4() }];
    case 'deleteToDo':
      return toDos.filter((toDo) => toDo.id !== action.id);
    default:
      return toDos;
  }
};

const toDosStore = legacy_createStore(reducer);

export default toDosStore;
