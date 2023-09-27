import React from 'react';

function Task({ task }) {
  return (
    <li>
      <input type="checkbox" checked={task.completed} />
      {task.name}
    </li>
  );
}

export default Task;
