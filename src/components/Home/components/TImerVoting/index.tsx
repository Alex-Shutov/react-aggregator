import React, { useEffect, useState } from 'react';
import timer_points from '@public/icons/timer_points.svg';

export type TimerProps = {
  finishDate: string;
  title?: string;
  changeStatus?: any;
};

const format = (num: number): string => {
  return num < 10 ? '0' + num : num.toString();
};

const calcTimeFormat = (timeLeft: number): string[] => {
  const newDays = format(Math.floor(timeLeft / (3600 * 24)));
  const newHours = format(Math.floor((timeLeft / 3600) % 24));
  const newMinutes = format(Math.ceil((timeLeft / 60) % 60));

  return [newDays, newHours, newMinutes];
};

function TimerVoting({ finishDate, title = 'До завершения голосования осталось:', changeStatus }: TimerProps) {
  const deadline = Math.max(0, Math.floor((new Date(finishDate).getTime() - Date.now()) / 1000));
  const [timeLeft, setTimeLeft] = useState(deadline);
  const [days, setDays] = useState(calcTimeFormat(timeLeft)[0]);
  const [hours, setHours] = useState(calcTimeFormat(timeLeft)[1]);
  const [minutes, setMinutes] = useState(calcTimeFormat(timeLeft)[2]);

  useEffect(() => {
    const id = setInterval(decrement, 1000);
    const [newDays, newHours, newMinutes] = calcTimeFormat(timeLeft);

    setTimeLeft(deadline);
    setDays(prev => prev !== newDays ? newDays : prev);
    setHours(prev => prev !== newHours ? newHours : prev);
    setMinutes(prev => prev !== newMinutes ? newMinutes : prev);

    if (timeLeft <= 0) {
      changeStatus();
      clearInterval(id);
    } else {
      changeStatus(true);
    }

    return () => clearInterval(id);
  });

  const decrement = () =>
    setTimeLeft((prevTime) => {
      return prevTime === 0 ? 0 : prevTime - 1;
    });

  const cardCss = 'h-[6.7rem] rounded-md text-6xl bg-pnl_secondary'

  return (
    <>
      <div className={'mr-10  fw-bolder mb-6 text-xl font-semibold text-txt_main'}>{title}</div>
      <div className="flex">
        <div className="flex flex-wrap max-w-[7rem] gap-1.5 justify-center space-x[0.4rem]">
            <div
              className={`${cardCss} flex items-center justify-center flex-1 bg-pnl_secondary rounded text-white font-semibold`}>
              {days[0]}
            </div>
            <div
              className={`${cardCss} flex items-center  justify-center flex-1  bg-pnl_secondary rounded text-white font-semibold`}>
              {days[1]}
            </div>
          <div className="text-center text-gray-400">дней</div>
        </div>
        <img src={timer_points} className="self-center mx-4 animate-pulse" alt="Timer points" />
        <div className="flex flex-wrap  max-w-[7rem] justify-center space-x-[0.4rem]">
            <div
              className={`${cardCss} flex items-center justify-center flex-1 bg-pnl_secondary rounded text-white font-semibold`}>
              {hours[0]}
            </div>
            <div
              className={`${cardCss} flex items-center justify-center flex-1  bg-pnl_secondary rounded text-white font-semibold`}>
              {hours[1]}
            </div>
          <div className="text-center text-gray-400">часов</div>
        </div>
        <img src={timer_points} className="self-center mx-4 animate-pulse" alt="Timer points" />
        <div className="flex flex-wrap max-w-[7rem] justify-center space-x-[0.4rem] ">

            <div
              className={`${cardCss} flex items-center justify-center flex-1  bg-pnl_secondary rounded text-white font-semibold`}>
              {minutes[0]}
            </div>
            <div
              className={`${cardCss} flex items-center justify-center flex-1 bg-pnl_secondary rounded text-white font-semibold`}>
              {minutes[1]}
            </div>
          <div className="text-center text-gray-400">минут</div>
        </div>
      </div>
    </>
  );
}

export default TimerVoting;
