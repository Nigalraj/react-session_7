import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../../actions/todoActions';

const TodoComponent = () => {
  const [newItem, setNewItem] = useState('');
  const items = useSelector((state) => state.todo.items);
  const dispatch = useDispatch();

  const handleAddItem = () => {
    if (newItem) {
      dispatch(addItem({ id: Date.now(), text: newItem }));
      setNewItem('');
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.text}
            <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoComponent;
