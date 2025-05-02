import { useState } from "react";
import TaskList from "./TaskList";

function Column({ title, tasks, status, onTaskDelete }) {
  return (
    <div className="col">
        <div className="title"><h2>{title}</h2></div>
        <div className="list">
            <TaskList tasks={tasks} status={status} onTaskDelete={onTaskDelete}></TaskList>
        </div>
    </div>
  );
}
export default Column;