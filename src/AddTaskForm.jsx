import { useState, useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddTaskForm({ getFormData }) {
    const formRef = useRef();

    function handleFormSubmit(formData) {
        let taskObj = {
            'title': formData.get('task'),
            'descr': formData.get('description'),
            'user': formData.get('user'),
            'start': formData.get('date_start'),
            'end': formData.get('date_end'),
            'status': 'todo'
        };
        
        getFormData(taskObj); 
    }

    return (
        <Form action={handleFormSubmit} ref={formRef}>
            <Form.Group className="mb-3">
                <Form.Label>Nom de la tâche</Form.Label>
                <Form.Control name="task" type="text" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description de la tâche</Form.Label>
                <Form.Control name="description" type="textarea" />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Assignee</Form.Label>
                <Form.Select name="user">
                    <option value="0">Choose...</option>
                    <option value="User 1">User 1</option>
                    <option value="User 2">User 2</option>
                    <option value="User 3">User 3</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="row">
                <div className="col-sm">
                    <Form.Label>Date de la création</Form.Label>
                    <Form.Control name="date_start" type="date" />
                </div>
                <div className="col-sm">
                    <Form.Label>Date limite</Form.Label>
                    <Form.Control name="date_end" type="date" />
                </div>
            </Form.Group>

            <div className="btn-wrap">
                <Button variant="primary" type="submit">
                    Ajouter
                </Button>
            </div>
        </Form>
    );
}

export default AddTaskForm;