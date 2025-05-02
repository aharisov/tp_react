import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import AddTaskForm from './AddTaskForm';

function AddTaskModal({ show, onHide, passFormData}) {
    return(
        <Modal show={show} onHide={onHide}>
            <Modal.Dialog>
                <Modal.Header closeButton onClick={onHide}>
                    <Modal.Title>Ajouter une tâche</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <AddTaskForm getFormData={passFormData}/>
                </Modal.Body>
            </Modal.Dialog>
        </Modal>
    )
}

export default AddTaskModal;