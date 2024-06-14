// hooks/useProfile.ts
import { useRecoilState, useRecoilValue, useResetRecoilState } from 'recoil';
import {
  labelState,
  buttonVisibleState,
  buttonLinkState,
  subSubmitTextState,
  projectStatusState,
  buttonState, statusObjProfileAtom, profileChanges,
} from '../profile.atoms';
import userApi from '@components/User/user.api';
import { authUser } from '@components/User/user.selector';
import { authedAtom as userAtom } from '@components/User/user.atom';
import { teamState } from '@components/Teams/teams.atoms';
import teamApi from '@components/Teams/teams.api';
import { changeProfileSubmitButton } from '@components/User/components/Proifle/profile.selector';
import useTeam from '@components/Teams/hooks/useTeam';
import useEvents from '@components/Home/components/EventsFilter/hooks/useEvents';
import useProject from '@components/Project/hooks/useProject';

export const useProfile = () => {
  const [label, setLabel] = useRecoilState(labelState);
  const { currentEvent } = useEvents()
  const [buttonVisible, setButtonVisible] = useRecoilState(buttonVisibleState);
  const [buttonLink, setButtonLink] = useRecoilState(buttonLinkState);
  const [status, setStatus] = useRecoilState(statusObjProfileAtom);
  const [subSubmitText, setSubSubmitText] = useRecoilState(subSubmitTextState);
  const [projectStatus, setProjectStatus] = useRecoilState(projectStatusState);
  const button = useRecoilValue(changeProfileSubmitButton);
  const [changes,setChanges] = useRecoilState(profileChanges)
  const resetProfileChanges = useResetRecoilState(profileChanges)
  const resetButtonChanges = useResetRecoilState(buttonState)
  const resetStatus = useResetRecoilState(statusObjProfileAtom)
  const [user,setAuthUser] = useRecoilState(userAtom)
  const {team,setTeam} = useTeam()

  const saveButtonHandler = () => {
    if (button?.submit) {
      if(changes.has('userData')){
        user?.loadedUser
        && userApi.saveUser(user?.loadedUser)
          .then(el=>{
            if(el.status==='success')
              setAuthUser((prev)=>({...prev,loadedUser:el.body.user}))
          })
      }
      if(changes.has('teamData') && team && currentEvent){
        teamApi.saveOrUpdateCommand(team, currentEvent?.id).then((el)=>el.status==='success' && setTeam(el.body))
      }
      resetProfileChanges()
      resetButtonChanges()
      resetStatus()
    }
  };

  return {
    label,
    setLabel,
    buttonVisible,
    setButtonVisible,
    buttonLink,
    setButtonLink,
    status,
    setStatus,
    subSubmitText,
    setSubSubmitText,
    projectStatus,
    setProjectStatus,
    button,
    saveButtonHandler,
    setChanges
  };
};
