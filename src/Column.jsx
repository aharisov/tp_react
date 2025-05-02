import { useState } from "react";
import TaskList from "./TaskList";

function Column({ title, tasks, status }) {
  return (
    <div className="col">
        <div className="title"><h2>{title}</h2></div>
        <div className="list">
            <TaskList tasks={tasks} status={status}></TaskList>
        </div>
    </div>
  );
}
export default Column;