import dayjs from 'dayjs';
import Calendar from './Calendar';

function App() {
    return (
        <div className="App">
            <Calendar
                value={dayjs('2023-11-08')}
                onChange={date => {
                    alert(date.format('YYYY-MM-DD'));
                }}
            />
        </div>
    );
}

export default App;
