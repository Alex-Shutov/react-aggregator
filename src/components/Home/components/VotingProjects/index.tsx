import React from 'react';
import { Link } from 'react-router-dom';
import voices from '../assets/images/icons/voices.svg';
import BadgeList from '@shared/Badge/BadgeList';
import useEvents from '@components/Home/components/EventsFilter/hooks/useEvents';
import { IEventStatus } from '@components/Home/home.types';
import TimerVoting from '@components/Home/components/TImerVoting';
import formatUtils from '@utils/format';

interface ISeason {
  title: string;
  finishDate: string;
  countVoices: number;
}

interface IVoting {
  seasonsData: ISeason[];
  season: string;
}

const VotingProjects: React.FC<IVoting> = () => {
  const {currentEvent,changeCurrentEvent} = useEvents()


  return (
    <div className="flex flex-col lg:flex-row justify-between mb-10">
      <div className="flex-1 lg:mr-10">
        <h1 className="text-3xl font-bold text-white mb-4">Голосование за лучший проект</h1>
        <p className="text-white text-lg font-normal mb-4">
          Вы попали на страницу студенческих игровых проектов, которые создаются в рамках{' '}
          <b>проектного обучения</b> студентами <b>2-3 курса института ИРИТ-РтФ УрФУ</b>. Если вы{' '}
          <span className="text-blue-400">студент</span>, то вы можете отдать свой голос за понравившийся вам проект и
          поддержать команду.
        </p>
        <p className="text-white text-lg font-normal mb-4">
          Если вы <span className="text-blue-400">эксперт</span> из <b>IT-сферы</b>, то приглашаем вас поучаствовать в
          защитах проектов в составе экспертной комиссии. Подробнее на странице{' '}
          <Link to="/" className="text-blue-400 hover:underline">
            Защиты проектов
          </Link>
        </p>
        { currentEvent?.finishDate &&  currentEvent?.status === IEventStatus.OPEN_VOTE && (
          <TimerVoting
            finishDate={formatUtils.formatDate(currentEvent?.finishDate)}
            title="До завершения голосования осталось:"
            changeStatus={changeCurrentEvent}
          />
        )}
      </div>
      <div className="flex-1">
        <div className="mb-4">
          <div className="text-lg text-white font-bold mb-2">
            Событие: {currentEvent ? <span>{currentEvent.name}</span> : <span>Событие не найдено</span>}
          </div>
          {currentEvent && (
            <div className="text-lg font-normal text-white mb-4">
              Статус: <span className={`text-${currentEvent.status === IEventStatus.OPENED ? 'green' : 'yellow'}-400`}>{eventStatus ? 'Началось' : 'Завершено'}</span>
            </div>
          )}
          {currentEvent && (
            <div className="text-lg font-normal text-white mb-4">
              В наличии:
              <div className="relative inline-block">
                <img src={voices} alt="Иконка наличии голосов" className={`${!eventStatus ? 'opacity-50' : ''}`} />
                <div className="absolute bottom-0 left-0 w-full text-white text-center">
                  {currentEvent. ? currentSeason.countVoices : 0} голосов
                </div>
              </div>
            </div>
          )}
        </div>
        <div>
          <h2 className="text-lg font-bold text-white mb-2">Призы первых мест:</h2>
          <BadgeList badges={
            [{
              number:1,
              boldText:'15 баллов',
              defaultText:'+ мерч Проектного практикума'
            }]
          }/>
        </div>
      </div>
    </div>
  );
};


export default VotingProjects;
