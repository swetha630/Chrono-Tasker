export function requestNotificationPermission() {
    if ("Notification" in window) {
        Notification.requestPermission().then(permission => {
            if (permission === "granted") {
                console.log("Notifications enabled!");
            }
        });
    }
}

export function sendReminder(task, timeInMinutes) {
    if (Notification.permission === "granted") {
        setTimeout(() => {
            new Notification("Task Reminder ⏰", {
                body: `Don't forget to complete: ${task}`,
                icon: "/notification-icon.png"
            });
        }, timeInMinutes * 60 * 1000);
    }
}
