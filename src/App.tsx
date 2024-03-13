import dayjs from 'dayjs';
import './App.css';
import Calendar from './Calendar';

function App() {
    return (
        <div className="App">
            <Calendar value={dayjs('2024-01-01')} />
        </div>
    );
}

export default App;
