import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import SearchSelect from '@shared/SearchSelect';
import Select from '@shared/Selector';
import Selector from '@shared/Selector';
import useAvailableEvents from '@components/User/components/Proifle/hooks/useAvailableEvents';
import useRoles from '@components/User/components/Proifle/hooks/useRoles';
import useEvents from '@components/Home/components/EventsFilter/hooks/useEvents';
import { IEventStatus } from '@components/Home/home.types';
import CreateTeamBlock from '@components/User/components/Proifle/components/TeamBlock/CreateTeamBlock';
import useUser from '@components/User/hooks/useUser';
import { profileChanges, StatusObject, statusObjProfileAtom } from '@components/User/components/Proifle/profile.atoms';
import { transformToNewSet } from '@utils/transfrom';
import useTeam from '@components/Teams/hooks/useTeam';
import useProject from '@components/Project/hooks/useProject';

interface ButtonSeasonProps {
  label: string;
  disable?: boolean;
  select: boolean;
}

function ButtonSeason({ label = '', disable = false, select }: ButtonSeasonProps) {
  const color = select ? 'bg-bt_secondary' : 'bg-pnl_fourth';

  return (
    <button
      className={`flex items-center justify-center w-40 h-11 border ${color} border-bt_secondary transition-colors duration-100 ease-in-out font-medium text-lg rounded-md ${disable ? 'text-gray-400 border-gray-400 cursor-not-allowed' : ''}`}
      disabled={disable}
    >
      {label}
    </button>
  );
}

const MyProjects = () => {
  // const [activeButton, setActiveButton] = useRecoilState(activeButtonState);
  // const [role, setRole] = useRecoilState(roleState);
  // const {} = useEvents()
  const { availableEvents, selectedEvent} = useAvailableEvents()
  const {team,setTeam,createEmptyTeam} = useTeam()
  const {user} = useUser()
  const {roles,changeRole,currentRole} = useRoles()

  const setChanges = useSetRecoilState(profileChanges)
  const  setStatus = useSetRecoilState(statusObjProfileAtom);

  // useEffect(() => {
  //   if()
  // }, []);


  const handleChangeRole = (id:string) => {

    changeRole(id)
    setStatus(StatusObject.changesMade)
    if(roles.find(el=>el.id===id)?.role ==='Team Lead') {
      if (!team) createEmptyTeam()
      setChanges(prev => transformToNewSet(prev, 'teamData'))
    }
    setChanges(prev=>transformToNewSet(prev,'userData'))
  }

  // const seasons = useRecoilValue(seasonsState);
  // const [projectStatus, setProjectStatus] = useRecoilState(projectStatusState);

  // useEffect(() => {
  //   if (role === 'Выберите из списка') {
  //     setProjectStatus('choose');
  //     // Update the button state and other properties as needed
  //   } else if (role === 'Team Lead') {
  //     setProjectStatus('edit');
  //     // Update other properties as needed
  //   } else {
  //     setProjectStatus('watch');
  //     // Update other properties as needed
  //   }
  // }, [role, setProjectStatus]);

  useEffect(() => {
    // Set the label or perform other side effects
  }, []);
  console.log(currentRole,'currentRole');
  return (
    <div className="grow p-2">
      <h2 className="mb-2 text-2xl font-semibold">Выбор проектов</h2>
      <p className="mb-12 text-lg text-txt_secondary">выберите учебный семестр</p>
      <div className="flex gap-6 mb-12 flex-wrap">
        {availableEvents?.map((el, idx) => {
          return (
          <div key={idx} >
            {/*<div>{el.name}</div>*/}
            <ButtonSeason disable={false} label={el.name} select={el?.checked ?? false} />
          </div>
        )})}
      </div>
      {(
        <div className={'max-w-96 mb-12'}>
          <Selector
            // disabled={Boolean(team?.id)}
            idProp={'id'}
            prop={'role'}
            name={'roles'}
            placeholder={'Введите роль'}
            currentValue={currentRole?.role ?? ''}
            onChange={(id) => handleChangeRole(id)}
            label='Роль в команде*'
            options={roles}
          />
          <p>
            Создать команду может только <span className="text-txt_ind_secondary">Team Lead</span>
          </p>
        </div>
      )}
      {selectedEvent?.status === IEventStatus.OPENED && currentRole?.role === 'Team Lead' && user &&
        (<div>
          <CreateTeamBlock currentUser={user}/>
        </div>)
      }
    </div>
  );
};

export default MyProjects;
