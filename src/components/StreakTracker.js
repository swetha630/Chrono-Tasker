import { useEffect, useState } from "react";

function getTodayDate() {
    return new Date().toISOString().split('T')[0];
}

export default function StreakTracker() {
    const [streak, setStreak] = useState(0);

    useEffect(() => {
        let streakData = JSON.parse(localStorage.getItem("taskStreak")) || { count: 0, lastDate: null };
        let today = getTodayDate();

        if (streakData.lastDate !== today) {
            if (streakData.lastDate && new Date(streakData.lastDate).getTime() === new Date(today).getTime() - 86400000) {
                streakData.count += 1;
            } else {
                streakData.count = 1;
            }
            streakData.lastDate = today;
            localStorage.setItem("taskStreak", JSON.stringify(streakData));
        }
        setStreak(streakData.count);
    }, []);

    return <p>🔥 Streak: {streak} days</p>;
}
//

