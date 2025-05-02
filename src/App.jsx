import { useState, useEffect } from 'react'
import './App.css';
import Button from 'react-bootstrap/Button';
import AddTaskModal from './AddTaskModal';
import Column from './Column';

function App() {
  const [tasks, setTasks] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  function handleFormData(data) {
    data.id = tasks.length + 1;
    setTasks([...tasks, data]);
  }

  function handleTaskDelete(id) {
    const newTaskList = tasks.filter(task => task.id != id);
    // console.log('new list', tasks.length, newTaskList);
    setTasks(newTaskList);
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
      <div className="columns">
        <Column title="À faire" tasks={tasks} status="todo" onTaskDelete={handleTaskDelete}></Column>
        <Column title="En cours" tasks={tasks} status="doing" onTaskDelete={handleTaskDelete}></Column>
        <Column title="Terminé" tasks={tasks} status="done" onTaskDelete={handleTaskDelete}></Column>
      </div>

      <AddTaskModal show={showModal} onHide={handleCloseModal} passFormData={handleFormData}></AddTaskModal>
    </div>
  )
}

export default App;
