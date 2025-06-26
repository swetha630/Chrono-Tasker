function GoogleCalendar() {
    const [eventTitle, setEventTitle] = useState("");
    const [eventDetails, setEventDetails] = useState("");

    const addToCalendar = () => {
        const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
        const title = `&text=${encodeURIComponent(eventTitle)}`;
        const details = `&details=${encodeURIComponent(eventDetails)}`;
        const url = base + title + details;

        window.open(url, "_blank");
    };

    return (
        <div className="todo-list">
            <h2>Google Calendar</h2>
            <input
                type="text"
                placeholder="Event Title"
                value={eventTitle}
                onChange={(e) => setEventTitle(e.target.value)}
            />
            <br />
            <input
                type="text"
                placeholder="Event Details"
                value={eventDetails}
                onChange={(e) => setEventDetails(e.target.value)}
            />
            <br />
            <button onClick={addToCalendar}>Add to Google Calendar</button>
        </div>
    );
}

export default GoogleCalendar;
