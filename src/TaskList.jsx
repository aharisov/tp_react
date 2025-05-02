import { useEffect } from "react";
import TaskItem from "./TaskItem";

function TaskList({ tasks, status, onTaskDelete }) {
    // console.log("Tasks:", tasks);

    const filteredTasks = tasks.filter(task => task.status == status);

    useEffect(() => {
        // console.info('task list', tasks);
      }, [filteredTasks]);

    if (!Array.isArray(tasks)) return <p>Erreur: tâches non valides</p>;

    return (
        <div>
            {filteredTasks.length === 0 ? (
                    <p>Il n'y a pas de tâches...</p>
            ) : (
                filteredTasks.map((task, index) => (
                    <TaskItem key={index} task={task} onTaskDelete={onTaskDelete} />
                ))
            )}
        </div>
    );
}
export default TaskList;