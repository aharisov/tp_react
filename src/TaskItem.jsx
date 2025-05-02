import {useDraggable} from '@dnd-kit/core';
import Button from 'react-bootstrap/Button';
import { Trash, Calendar, GripVertical } from 'react-bootstrap-icons';

function TaskItem({ task, onTaskDelete }) {
    const {attributes, listeners, setNodeRef, transform} = useDraggable({
        id: task.id,
    });
      const style = transform ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
    } : undefined;

    function formatDate(inputDate) {
        const date = new Date(inputDate);
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const year = date.getFullYear();
      
        return `${day}/${month}/${year}`;
    }

    return (
        <div className="task-card" ref={setNodeRef} style={style}>
            <div className='draggable' {...listeners} {...attributes}><GripVertical /></div>
            <h3 className="task-title">{task.title}</h3>
            <p>{task.descr}</p>
            <div className="date"><Calendar /> {formatDate(task.start)} - {formatDate(task.end)}</div>
            <div className="user">{task.user}</div>
            <div className="buttons">
                <Button variant="danger" onClick={
                (e) => {
                    e.stopPropagation();
                    console.log('del');
                    onTaskDelete(task.id)
                }}><Trash /></Button>
            </div>
            
        </div>
    )
}

export default TaskItem;