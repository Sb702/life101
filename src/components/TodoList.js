import React from 'react';
import DeleteButton from './DeleteButton';

function TodoList(props) {
  const { index, deleteItem } = props;

  return (
    <div>
      <h1>{props.todo.title}</h1>
      {/* button to delete todo from array if clicked */}
      <DeleteButton index={index} deleteItem={deleteItem} />
    </div>
  );
}

export default TodoList;
