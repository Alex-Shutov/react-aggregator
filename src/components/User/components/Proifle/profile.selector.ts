import { selector } from 'recoil';
import { buttonState, profileChanges } from '@components/User/components/Proifle/profile.atoms';
import { teamState } from '@components/Teams/teams.atoms';
import { authUser } from '@components/User/user.selector';
import { authedAtom as userAtom } from '@components/User/user.atom';
import { locationState } from '@/App';
import { createNewProject } from '@components/Project/projects.selector';
import { getCurrentProjectAtom } from '@components/Project/projects.atom';

export const changeProfileSubmitButton = selector({
  key: '/change_profile_button',
  get: ({ get }) => {
    const changes = get(profileChanges);
    const currentButton = get(buttonState);
    const project = get(getCurrentProjectAtom)
    const user = get(userAtom);
    const team = get(teamState);
    const newButtonState = { ...currentButton };
    const location = get(locationState);
    debugger
    if (changes.size) {
      newButtonState.children = 'Сохранить';
      newButtonState.disabled = false;
      newButtonState.type = 'bt_primary';
      return newButtonState;
    }

    if (!changes.size && !team.id) {
      newButtonState.children = 'Нет изменений';
      newButtonState.disabled = true;
      newButtonState.type = 'bg_disabled';
      return newButtonState;
    }

    if (!changes.size && team.id && !team?.projectId && location.includes('my-projects') && user?.loadedUser?.projectRoles?.role === 'Team Lead') {
      newButtonState.children = 'Создать проект';
      newButtonState.submit=false;
      newButtonState.disabled = false;
      newButtonState.type = 'bt_secondary';
      newButtonState.to= `/project/${get(createNewProject)}/edit`
      return newButtonState;
    }

    if (!changes.size && team.id && team.projectId && location.includes('my-projects') && user?.loadedUser?.projectRoles?.role === 'Team Lead') {
      newButtonState.children = 'Редактировать проект';
      newButtonState.submit=false;
      newButtonState.disabled = false;
      newButtonState.type = 'bt_secondary';
      newButtonState.to= `/project/${team?.projectId}/edit`
      return newButtonState;
    }

    return newButtonState;
  }
})


