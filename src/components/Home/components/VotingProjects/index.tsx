import React from 'react';
import { Link } from 'react-router-dom';
import voices from '../assets/images/icons/voices.svg';
import BadgeList from '@shared/Badge/BadgeList';
import useEvents from '@components/Home/components/EventsFilter/hooks/useEvents';
import { IEventStatus } from '@components/Home/home.types';
import TimerVoting from '@components/Home/components/TImerVoting';
import formatUtils from '@utils/format';
import useUser from '@components/User/hooks/useUser';
import EventInfo from '@components/Home/components/VotingProjects/EventInfo';


const VotingProjects = () => {
  const {currentEvent,changeCurrentEvent} = useEvents()
  const {user} = useUser()


  return (
    <div className="flex flex-col lg:flex-row justify-between mb-10">
      <div className="flex-1 flex-grow-[1.8] lg:mr-10">
        <p className="text-2xl  font-medium text-white mb-6">Голосование за лучший проект</p>
        <p className="text-txt_secondary text-lg font-light mb-4">
          Вы попали на страницу студенческих игровых проектов, которые создаются в рамках{' '}
          <span className='text-txt_main font-bold'>проектного обучения</span> студентами <span className='text-txt_main font-bold'>2-3 курса института ИРИТ-РтФ УрФУ</span>. Если вы{' '}
          <span className="text-blue-400">студент</span>, то вы можете отдать свой голос за понравившийся вам проект и
          поддержать команду.
        </p>
        <p className="text-txt_secondary text-lg font-normal mb-4">
          Если вы <span className="text-blue-400">эксперт</span> из <span className='text-txt_main font-bold'>IT-сферы</span>, то приглашаем вас поучаствовать в
          защитах проектов в составе экспертной комиссии.<br/>
          <span className={'inline-flex gap-2'}>
            Подробнее на странице {' '}
            <Link to="/" className="text-blue-400 hover:underline">
              {' '}Защиты проектов
          </Link>
          </span>

        </p>
        { currentEvent?.finishDate && (
          <TimerVoting
            finishDate={formatUtils.formatDate(currentEvent?.finishDate)}
            title="До завершения голосования осталось:"
            changeStatus={changeCurrentEvent}
          />
        )}
      </div>
      {currentEvent && <EventInfo currentEvent={currentEvent} user={user}/>}
    </div>
  );
};


export default VotingProjects;
