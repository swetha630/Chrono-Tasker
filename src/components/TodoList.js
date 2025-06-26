import React, { useState } from "react";

function TodoList() {
    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);

    const addTask = () => {
        if (task.trim()) {
            setTasks([...tasks, { text: task, completed: false }]);
            setTask("");
        }
    };

    const toggleComplete = (index) => {
        const updated = [...tasks];
        updated[index].completed = !updated[index].completed;
        setTasks(updated);
    };

    const deleteTask = (index) => {
        const updated = tasks.filter((_, i) => i !== index);
        setTasks(updated);
    };

    return (
        <div className="todo-list">
            <h2>To-Do List</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index} className={t.completed ? "completed" : ""}>
                        {t.text}
                        <div>
                            <button onClick={() => toggleComplete(index)}>✓</button>
                            <button onClick={() => deleteTask(index)}>✗</button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;

