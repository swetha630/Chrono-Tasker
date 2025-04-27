
export function addToGoogleCalendar(task, date) {
    let baseUrl = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    let title = encodeURIComponent(task);
    let dateTime = new Date(date).toISOString().replace(/-|:|\.\d+/g, ""); // YYYYMMDDT format

    let eventUrl = `${baseUrl}&text=${title}&dates=${dateTime}/${dateTime}&details=Task%20from%20To-Do%20List`;
    window.open(eventUrl, "_blank");
}