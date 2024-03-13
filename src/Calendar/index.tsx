import { Dayjs } from 'dayjs';
import MonthCalendar from './MonthCalendar';
import './index.scss';
import { FC } from 'react';
import Header from './Header';

export interface CalendarProps {
    value: Dayjs;
}
const Calendar: FC<CalendarProps> = props => {
    return (
        <div className="calendar">
            <Header />
            <MonthCalendar {...props} />
        </div>
    );
};

export default Calendar;
