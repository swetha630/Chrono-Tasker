import React, { useState } from "react";

function StreakTracker() {
    const [streak, setStreak] = useState(0);

    const increment = () => setStreak(streak + 1);
    const reset = () => setStreak(0);

    return (
        <div className="todo-list">
            <h2>Streak Tracker</h2>
            <p>✅ Completed Days: <strong>{streak}</strong></p>
            <button onClick={increment}>Mark Day</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default StreakTracker;
