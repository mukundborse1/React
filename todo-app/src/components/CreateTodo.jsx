import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { todoAdd } from '../features/slices/todoSlice';

const CreateTodo = () => {
    const todo = useSelector((state) => state.todos.list);
    const [title, setTitle] = useState("");
    const dispatch = useDispatch();

    const handleAdd = () => {
    if (title.trim()) {
      dispatch(todoAdd(title));
      setTitle("");
    }
  };

  return (
    <div>
            <input 
                type='text'
                placeholder='Enter todo Title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default CreateTodo;