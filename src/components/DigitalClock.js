import React, { useEffect, useState } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="clock">
            <h2>Current Time</h2>
            <h3>{time.toLocaleTimeString()}</h3>
        </div>
    );
}

export default DigitalClock;
