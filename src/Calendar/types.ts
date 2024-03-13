import { Dayjs } from 'dayjs';
import { CSSProperties } from 'react';
import { LocaleType } from './locale';

export interface CalendarProps {
    value: Dayjs;
    // 修改 Calendar 组件外层容器的样式
    style?: CSSProperties;
    // 修改 Calendar 组件外层容器的样式
    className?: string | string[];
    // 定制日期显示，会覆盖日期单元格
    dateRender?: (currentDate: Dayjs) => React.ReactNode;
    // 定制日期单元格，内容会被添加到单元格内，只在全屏日历模式下生效
    dateInnerContent?: (currentDate: Dayjs) => React.ReactNode;
    // 国际化相关
    locale?: LocaleType;
    // 当选择了日期之后会触发的回调
    onChange?: (date: Dayjs) => void;
}

export interface MonthCalendarProps extends CalendarProps {
    selectHandler: (date: Dayjs) => void;
    curMonth: Dayjs;
}

export interface LocaleContextType {
    locale: LocaleType;
}
