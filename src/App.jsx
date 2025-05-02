import { useState, useEffect } from 'react';
import {DndContext} from '@dnd-kit/core';
import './App.css';
import Button from 'react-bootstrap/Button';
import AddTaskModal from './AddTaskModal';
import Column from './Column';

function App() {
  const defaultTasks = [
    {
      'id': 1,
      'title': 'default task',
      'descr': 'default task description',
      'user': 'default user',
      'start': '2025-05-02',
      'end': '2025-06-10',
      'status': 'todo'
    }
  ]
  const [tasks, setTasks] = useState(defaultTasks);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  function handleFormData(data) {
    data.id = tasks.length + 1;
    setTasks([...tasks, data]);
  }

  function handleTaskDelete(id) {
    const newTaskList = tasks.filter(task => task.id != id);
    console.log('new list', tasks.length, newTaskList);
    setTasks(newTaskList);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
  
    if (over && active.id !== over.id) {
      setTasks(prev =>
        prev.map(task =>
          task.id === active.id
            ? { ...task, status: over.id === '1' ? 'todo' : over.id === '2' ? 'doing' : 'done' }
            : task
        )
      );
    }
  }

  useEffect(() => {
    // console.info('task list', tasks);
  }, [tasks]);

  return (
    <div className="app-cont">
      <div className="top">
        <h1>Kanban</h1>
        <Button variant="primary" onClick={handleShowModal}>
          Ajouter une tâche
        </Button>
      </div>
      
      <DndContext onDragEnd={handleDragEnd}>
        <div className="columns">
          <Column id="1" title="À faire" tasks={tasks} status="todo" onTaskDelete={handleTaskDelete}></Column>
          <Column id="2" title="En cours" tasks={tasks} status="doing" onTaskDelete={handleTaskDelete}></Column>
          <Column id="3" title="Terminé" tasks={tasks} status="done" onTaskDelete={handleTaskDelete}></Column>
        </div>
      </DndContext>

      <AddTaskModal show={showModal} onHide={handleCloseModal} passFormData={handleFormData}></AddTaskModal>
    </div>
  )
}

export default App;
