import React from 'react';

function DeleteButton(props) {

    const { index, deleteItem } = props;

// function to delete the todo based on the index of the todo from the props we received
    function handleDelete() {
        deleteItem(index);
    }


  return (
    <div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default DeleteButton;
