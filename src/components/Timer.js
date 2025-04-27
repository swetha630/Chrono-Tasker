import { useEffect, useState } from "react";

const Timer = () => {
    const [time, setTime] = useState("00:00:00"); // Store time as HH:MM:SS format
    const [isActive, setIsActive] = useState(false);

    // Parse the time string to hours, minutes, and seconds
    const parseTime = (timeString) => {
        const [hours, minutes, seconds] = timeString.split(":").map((part) => parseInt(part, 10));
        return { hours, minutes, seconds };
    };

    useEffect(() => {
        let interval;

        if (isActive) {
            interval = setInterval(() => {
                // Parse the time string to get hours, minutes, and seconds
                const { hours, minutes, seconds } = parseTime(time);

                if (seconds > 0) {
                    setTime(`${hours}:${minutes}:${seconds - 1}`);
                } else if (minutes > 0) {
                    setTime(`${hours}:${minutes - 1}:59`);
                } else if (hours > 0) {
                    setTime(`${hours - 1}:59:59`);
                } else {
                    clearInterval(interval);
                    setIsActive(false); // Stop timer when time is up
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }

        return () => clearInterval(interval);
    }, [isActive, time]); // Only depend on `time` and `isActive`

    const startTimer = () => setIsActive(true);
    const pauseTimer = () => setIsActive(false);
    const resetTimer = () => {
        setIsActive(false);
        setTime("00:00:00"); // Reset time to "00:00:00"
    };

    const handleChangeTime = (e) => {
        const value = e.target.value;
        // Ensure the input is in HH:MM:SS format
        if (/^([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2})$/.test(value) || value === "") {
            setTime(value);
        }
    };

    return (
        <div className="timer">
            <h2>Add timer for your task in hrs:min:sec</h2>
            <input
                type="text"
                placeholder="Enter time in HH:MM:SS"
                value={time}
                onChange={handleChangeTime}
            />
            <h3>{time}</h3> {/* Display time in HH:MM:SS format */}
            <button onClick={startTimer}>Start</button>
            <button onClick={pauseTimer}>Pause</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    );
};

export default Timer;
