import React from 'react';

export const TodoListItem = ({ todo, index, handleDelete, handleToggle }) => {

  function renderTodo()
  {
    if(todo.done)
    {
      return <strike>{index + 1}. {todo.desc}</strike>
    }
    else{
      return <div>{index + 1}. {todo.desc}</div>
    }
  }

  return (
    <li key={todo.id} className='list-group-item'>
      <p onClick={() => handleToggle(todo.id)
    }>
        {renderTodo()}
      </p>
      <button
        className='btn btn-danger'
        onClick={() => handleDelete(index)

        }
        
      >
        Borrar
      </button>
    </li>
  );
};
