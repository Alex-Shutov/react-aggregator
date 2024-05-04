import { atom } from 'recoil';
import { getToken } from '@shared/http';

interface IMainState{
  isLoading:boolean
  loadedUser:any
  authStage:"logged"|"logged_out"|"unknown"|"failed"
}

const authedAtom = atom<IMainState>({
  key:'/user',
  default:{isLoading:false,loadedUser:null,authStage:'logged_out'}
})

export default authedAtom