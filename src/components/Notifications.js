import { useEffect } from "react";

function Notifications() {
    useEffect(() => {
        if (Notification.permission !== "granted") {
            Notification.requestPermission();
        }
    }, []);

    const sendNotification = () => {
        if (Notification.permission === "granted") {
            new Notification("Chrono Tasker Reminder", {
                body: "Don't forget to check your tasks and timer!",
                icon: "https://cdn-icons-png.flaticon.com/512/1827/1827392.png",
            });
        } else {
            alert("Notifications are not enabled. Please allow permission.");
        }
    };

    return (
        <div className="todo-list">
            <h2>Notifications</h2>
            <button onClick={sendNotification}>Send Reminder</button>
        </div>
    );
}

export default Notifications;

