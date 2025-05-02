import Button from 'react-bootstrap/Button';
import { Trash, GripVertical } from 'react-bootstrap-icons';

function TaskItem({ task }) {
    return (
        <div className="task-card">
            <div className='d-flex'>
                <div className="drag-btn"><GripVertical /></div>
                <div className="task-title">{task.title}</div>
            </div>
            <Button variant="danger"><Trash /></Button>
        </div>
    )
}

export default TaskItem;