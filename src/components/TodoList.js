import { useEffect, useState } from "react";
import { addToGoogleCalendar } from "./GoogleCalendar";

import { requestNotificationPermission, sendReminder } from "./Notifications";
import StreakTracker from "./StreakTracker";

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");
    const [reminderTime, setReminderTime] = useState(0); // Minutes for reminder

    // Request notification permission on mount
    useEffect(() => {
        requestNotificationPermission();
    }, []);

    // Load tasks from local storage
    useEffect(() => {
        const savedTasks = localStorage.getItem("tasks");
        if (savedTasks) {
            setTasks(JSON.parse(savedTasks));
        }
    }, []);

    // Save tasks to local storage on change
    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    // Add a new task
    const addTask = () => {
        if (newTask.trim() !== "") {
            const taskData = { text: newTask, completed: false, date: new Date().toISOString().split("T")[0] };
            setTasks([...tasks, taskData]);

            // Send a reminder if time is set
            if (reminderTime > 0) {
                sendReminder(newTask, reminderTime);
            }

            setNewTask("");
            setReminderTime(0);
        }
    };

    // Toggle task completion
    const toggleComplete = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks[index].completed = !updatedTasks[index].completed;
        setTasks(updatedTasks);
    };

    // Remove a task
    const removeTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    };

    return (
        <div className="todo-list">
            <h2>To-Do List</h2>
            
            {/* Task Input */}
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Enter a task..."
            />
            
            {/* Reminder Time Input */}
            <input
                type="number"
                value={reminderTime}
                onChange={(e) => setReminderTime(Number(e.target.value))}
                placeholder="Reminder in minutes..."
                min="0"
            />

            <button onClick={addTask}>Add Task</button>

            {/* Task List */}
            <ul>
                {tasks.map((task, index) => (
                    <li key={index} className={task.completed ? "completed" : ""}>
                        <span onClick={() => toggleComplete(index)}>{task.text}</span>
                        <button onClick={() => removeTask(index)}>❌</button>
                        <button onClick={() => addToGoogleCalendar(task.text, task.date)}>📅 Google Calendar</button>
                    </li>
                ))}
            </ul>

            {/* Streak Tracker */}
            <StreakTracker />
        </div>
    );
};

export default TodoList;
