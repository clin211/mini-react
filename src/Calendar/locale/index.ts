import zhCN from './zh-CN';
import enUS from './en-US';
import { CalendarType } from './interface';

export type LocaleType = 'zh-CN' | 'en-US';
const allLocales: Record<LocaleType, CalendarType> = {
    'zh-CN': zhCN,
    'en-US': enUS,
};

export default allLocales;
