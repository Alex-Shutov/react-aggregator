import { atom } from 'recoil';
import { IProjectProps } from '@components/Projects/projects.types';


export const allProjectsList = atom<IProjectProps[]>({
  key:'/projects',
  default:[]
})
