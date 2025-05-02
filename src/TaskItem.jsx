import Button from 'react-bootstrap/Button';
import { Trash, GripVertical } from 'react-bootstrap-icons';

function TaskItem({ task, onTaskDelete }) {
    // function handleTaskDelete(id) {
    //     onTaskDelete(id);
    // }
    return (
        <div className="task-card">
            <div className='d-flex'>
                <div className="drag-btn"><GripVertical /></div>
                <div className="task-title">{task.title}</div>
            </div>
            <Button variant="danger" onClick={() => {console.log('click', task.id);onTaskDelete(task.id)}}><Trash /></Button>
        </div>
    )
}

export default TaskItem;