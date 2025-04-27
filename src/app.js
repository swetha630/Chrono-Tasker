import React from "react";
import DigitalClock from "./components/DigitalClock";
import Pomodoro from "./components/Pomodoro";
import StreakTracker from "./components/StreakTracker";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";
import "./styles.css";

function app() {
    return (
        <div className="container">
            <h1>To-Do List with Digital Clock & Timer</h1>
            <DigitalClock />
            <Timer />
            <TodoList />
            <Pomodoro />
            <StreakTracker />
        </div>
    );
}


export default app;
