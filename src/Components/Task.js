import React from 'react'

const Task = ({ task, task: {name, deadline, id}, editTask, deletingTask,}) => {
  const deleteTask = () => deletingTask(id);
  const edit = () => editTask(task);

  return (
    <div className='task'>
      {`${name} needs to be done by ${deadline} `}
      <button onClick={edit}>Wife Changed Her Mind</button>
      <button onClick={deleteTask}>Job Well Done</button>
    </div>
  );
};

export default Task