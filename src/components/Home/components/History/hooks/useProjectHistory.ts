import { useState, useEffect } from 'react';
import { IProjectProps } from '@components/Projects/projects.types';


export const useProjectHistory = () => {
  const [history, setHistory] = useState<IProjectProps[]>([]);

  useEffect(() => {
    // Получаем историю из сессионного хранилища при монтировании
    const storedHistory = sessionStorage.getItem('projectHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  const addToHistory = (project: IProjectProps) => {
    // Добавляем новый проект в начало истории
    const updatedHistory = [project, ...history.slice(0, 2)];
    setHistory(updatedHistory);
    // Сохраняем историю в сессионном хранилище
    sessionStorage.setItem('projectHistory', JSON.stringify(updatedHistory));
  };

  return { history, addToHistory };
};