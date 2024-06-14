import React from 'react';
import { IEvent, IEventStatus } from '@components/Home/home.types';
import BadgeList from '@shared/Badge/BadgeList';
import firstPlace from '@public/icons/place_flag/place_1.svg';
import secondPlace from '@public/icons/place_flag/place_2.svg';
import thirdPlace from '@public/icons/place_flag/place_3.svg';
import defaultPlace from '@public/icons/place_flag/place_default.svg';

interface IProps {
  currentEvent: IEvent;
  user: any;
}

const EventInfo: React.FC<IProps> = ({ currentEvent, user }) => {
  return (
    <div className="flex-1">
      <div className="mb-4 flex flex-col items-end">
        <p className="text-2xl text-white font-medium mb-1">
          Событие: {currentEvent ? <span>{currentEvent.name}</span> : <span>Событие не найдено</span>}
        </p>
        {currentEvent && (
          <div className="text-lg font-normal text-white mb-4">
            <span
              className={`${currentEvent.status === IEventStatus.OPENED ? 'text-txt_ind_main' : 'text-txt_ind_secondary'}`}>{currentEvent.status === IEventStatus.OPENED ? 'Началось' : 'Завершено'}</span>
          </div>
        )}
        {currentEvent && user && (
          <div className="text-lg font-normal text-white mb-4">
            В наличии:
            <div className="relative inline-block">
              <img alt="Иконка наличии голосов"
                   className={`${currentEvent.status === IEventStatus.OPENED ? 'opacity-50' : ''}`} />
              <div className="absolute bottom-0 left-0 w-full text-white text-center">
                {/*TODO вынести подсчет грейдов в функцию*/}
                {user?.grades ? 15 - (user.grades.length * 5) : 15} голосов
              </div>
            </div>
          </div>
        )}
      </div>
      <div>
        <h2 className="text-lg font-bold  text-white mb-2 flex flex-col items-end">Призы первых мест:</h2>
        <BadgeList badges={
          [{
            number: 1,
            boldText: '15 баллов',
            defaultText: '+ мерч Проектного практикума',
            urlImage: firstPlace,
          },
            {
              number: 2,
              boldText: '15 баллов',
              defaultText: '+ мерч Проектного практикума',
              urlImage: secondPlace,
              className: '!bg-pnl_first',
            },
            {
              number: 3,
              boldText: '15 баллов',
              defaultText: '+ мерч Проектного практикума',
              urlImage: thirdPlace,
              className: '!bg-pnl_first',
            },
          ]
        } />
      </div>
    </div>
  );
};

export default EventInfo;