import React, { useState } from 'react';


export const EditTodoform = ({ edittodo, task }) => {
    const [value, setValue] = useState(task ? task.task : ''); // Initialize with an empty string if task is undefined

    const handleSubmit = (e) => {
        e.preventDefault();
        edittodo(value, task.id);
    };

    return (
        <form onSubmit={handleSubmit} className="todoform">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                className="todo-input"
                placeholder="Update task"
            />
            <button type="submit" className="todo-btn">
                Update Task
            </button>
        </form>
    );
};