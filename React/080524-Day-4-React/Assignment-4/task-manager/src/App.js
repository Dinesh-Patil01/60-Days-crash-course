

import React, { useState, useEffect } from 'react';
import axios from 'axios';

function TaskManager() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({ title: '', isCompleted: false, assignee: '' });
  const [filterAssignee, setFilterAssignee] = useState('');

  useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = () => {
    axios.get('http://localhost:3000/tasks')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks:', error);
      });
  };

  const addTask = () => {
    axios.post('http://localhost:3000/tasks', newTask)
      .then(response => {
        console.log('Task added:', response.data);
        getAllTasks();
        setNewTask({ title: '', isCompleted: false, assignee: '' });
      })
      .catch(error => {
        console.error('Error adding task:', error);
      });
  };

  const updateTask = (taskId, newData) => {
    axios.put(`http://localhost:3000/tasks/${taskId}`, newData)
      .then(response => {
        console.log('Task updated:', response.data);
        getAllTasks();
      })
      .catch(error => {
        console.error('Error updating task:', error);
      });
  };

  const deleteTask = (taskId) => {
    axios.delete(`http://localhost:3000/tasks/${taskId}`)
      .then(response => {
        console.log('Task deleted:', response.data);
        getAllTasks();
      })
      .catch(error => {
        console.error('Error deleting task:', error);
      });
  };

  const showIncompleteTasks = () => {
    axios.get('http://localhost:3000/tasks?isCompleted=false')
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching incomplete tasks:', error);
      });
  };

  const filterTasksByAssignee = () => {
    axios.get(`http://localhost:3000/tasks?assignee=${filterAssignee}`)
      .then(response => {
        setTasks(response.data);
      })
      .catch(error => {
        console.error('Error fetching tasks by assignee:', error);
      });
  };

  return (
    <div>
      <div>
        <h2>Add New Task</h2>
        <input type="text" value={newTask.title} onChange={e => setNewTask({ ...newTask, title: e.target.value })} placeholder="Title" />
        <input type="checkbox" checked={newTask.isCompleted} onChange={e => setNewTask({ ...newTask, isCompleted: e.target.checked })} /> Completed
        <input type="text" value={newTask.assignee} onChange={e => setNewTask({ ...newTask, assignee: e.target.value })} placeholder="Assignee" />
        <button onClick={addTask}>Add Task</button>
      </div>

      <div>
        <h2>All Tasks</h2>
        <button onClick={getAllTasks}>Get All Tasks</button>
        <button onClick={showIncompleteTasks}>Show Incomplete Tasks</button>
        <input type="text" value={filterAssignee} onChange={e => setFilterAssignee(e.target.value)} placeholder="Filter by Assignee" />
        <button onClick={filterTasksByAssignee}>Filter</button>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.title} - Completed: {task.isCompleted ? 'Yes' : 'No'} - Assignee: {task.assignee}
              <button onClick={() => updateTask(task.id, { title: prompt('Enter new title:', task.title), isCompleted: confirm('Is the task completed?'), assignee: prompt('Enter new assignee:', task.assignee) })}>Update</button>
              <button onClick={() => deleteTask(task.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TaskManager;
