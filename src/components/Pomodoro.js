import React, { useState, useEffect } from "react";

function Pomodoro() {
    const [timeLeft, setTimeLeft] = useState(25 * 60);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (isRunning && timeLeft > 0) {
            timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
        }
        return () => clearInterval(timer);
    }, [isRunning, timeLeft]);

    const toggleTimer = () => setIsRunning(!isRunning);
    const resetTimer = () => {
        setIsRunning(false);
        setTimeLeft(25 * 60);
    };

    const formatTime = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className="timer">
            <h2>Pomodoro Timer</h2>
            <h3>{formatTime(timeLeft)}</h3>
            <button onClick={toggleTimer}>{isRunning ? "Pause" : "Start"}</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
}

export default Pomodoro;

