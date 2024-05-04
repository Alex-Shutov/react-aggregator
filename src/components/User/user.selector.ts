import { selector } from 'recoil';
import userAtom from '@components/User/user.atom';

const authUser = selector({
  key:'/user/selector',
  get:({get})=>{
    const state = get(userAtom)
    if(state.loadedUser?.id) state.authStage = 'logged'
    else if(!state.isLoading && !state.loadedUser?.id) state.authStage = 'logged_out'
    else if ( state.isLoading && !state.loadedUser?.id) state.authStage = 'unknown';
    return state
  }
})