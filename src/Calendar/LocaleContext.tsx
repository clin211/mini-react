import { createContext } from 'react';
import { LocaleContextType } from './types';

const LocaleContext = createContext<LocaleContextType>({ locale: 'zh-CN' });
export default LocaleContext;
