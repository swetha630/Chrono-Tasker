import DigitalClock from "./components/DigitalClock";
import GoogleCalendar from "./components/GoogleCalendar";
import Notifications from "./components/Notifications";
import Pomodoro from "./components/Pomodoro";
import StreakTracker from "./components/StreakTracker";
import Timer from "./components/Timer";
import TodoList from "./components/TodoList";


function App() {
    return (
        <div className="container">
            <h1>To-Do List with Digital Clock & Timer</h1>
            <DigitalClock />
            <Timer />
            <TodoList />
            <Pomodoro />
            <StreakTracker />
            <Notifications />
            <GoogleCalendar />
        </div>
    );
}

export default App;
