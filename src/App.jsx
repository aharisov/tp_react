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
    setTasks([...tasks, data]);
  }

  useEffect(() => {
    console.info('task list', tasks);
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
        <Column title="À faire" tasks={tasks} status="todo"></Column>
        <Column title="En cours" tasks={tasks} status="doing"></Column>
        <Column title="Terminé" tasks={tasks} status="done"></Column>
      </div>

      <AddTaskModal show={showModal} onHide={handleCloseModal} passFormData={handleFormData}></AddTaskModal>
    </div>
  )
}

export default App;
