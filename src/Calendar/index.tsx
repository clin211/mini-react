import { FC, useState } from 'react';
import cs from 'classnames';
import './index.scss';
import MonthCalendar from './MonthCalendar';
import Header from './Header';
import { CalendarProps } from './types';
import LocaleContext from './LocaleContext';
import { LocaleType } from './locale';
import dayjs, { Dayjs } from 'dayjs';

const Calendar: FC<CalendarProps> = props => {
    const { value, className, style, locale, onChange } = props;
    const classNames = cs('calendar', className);
    const [curValue, setCurValue] = useState(value);
    const [curMonth, setCurMonth] = useState(value);

    const changeDate = (date: Dayjs) => {
        setCurValue(date);
        setCurMonth(date);
        onChange?.(date);
    };
    const selected = (date: Dayjs) => {
        changeDate(date);
    };

    const prevMonthHandler = () => {
        setCurMonth(curMonth.subtract(1, 'month'));
    };

    const nextMonthHandler = () => {
        setCurMonth(curMonth.add(1, 'month'));
    };

    const todayHandler = () => {
        const date = dayjs(Date.now());
        changeDate(date);
    };

    return (
        <LocaleContext.Provider
            value={{ locale: locale || (navigator.language as LocaleType) }}>
            <div className={classNames} style={style}>
                <Header
                    curMonth={curMonth}
                    prevMonthHandler={prevMonthHandler}
                    nextMonthHandler={nextMonthHandler}
                    todayHandler={todayHandler}
                />
                <MonthCalendar
                    {...props}
                    value={curValue}
                    curMonth={curMonth}
                    selectHandler={selected}
                />
            </div>
        </LocaleContext.Provider>
    );
};

export default Calendar;
