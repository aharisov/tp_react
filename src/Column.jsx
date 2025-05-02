import { useState } from "react";
import {useDroppable} from '@dnd-kit/core';
import TaskList from "./TaskList";

function Column({ id, title, tasks, status, onTaskDelete }) {
  const {isOver, setNodeRef} = useDroppable({
    id: id,
  });

  const style = {
    color: isOver ? 'gray' : undefined,
  };
  return (
    <div className="col" ref={setNodeRef} style={style}>
      <div className="title"><h2>{title}</h2></div>
      <div className="list">
          <TaskList tasks={tasks} status={status} onTaskDelete={onTaskDelete}></TaskList>
      </div>
    </div>
  );
}
export default Column;