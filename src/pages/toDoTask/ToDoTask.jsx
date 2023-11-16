import React from "react";
import Menu from "../menu/Menu";
import TaskList from "../../components/toDoTask/TaskList";

const ToDoTask = () => {
    return (
        <div className="Todo">
            <Menu />
            <h1>To Do list</h1>
            <TaskList />
        </div>
    );
}

export default ToDoTask;