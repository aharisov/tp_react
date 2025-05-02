import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function AddTaskForm() {
  return (
    <Form>
        <Form.Group className="mb-3">
            <Form.Label>Nom de la tâche</Form.Label>
            <Form.Control type="text" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Description de la tâche</Form.Label>
            <Form.Control type="textarea" />
        </Form.Group>
        <Form.Group className="mb-3">
            <Form.Label>Assignee</Form.Label>
            <Form.Select>
                <option value="0">Choose...</option>
                <option value="1">User 1</option>
                <option value="2">User 2</option>
                <option value="3">User 3</option>
            </Form.Select>
        </Form.Group>
        <Form.Group className="row">
            <div className="col-sm">
                <Form.Label>Date de la création</Form.Label>
                <Form.Control type="date" />
            </div>
            <div className="col-sm">
                <Form.Label>Date limite</Form.Label>
                <Form.Control type="date" />
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