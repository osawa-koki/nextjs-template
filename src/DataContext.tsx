import { createContext } from 'react';
import SharedData from './SharedData';
export const DataContext = createContext({} as { sharedData, setSharedData: (data: SharedData) => void });
