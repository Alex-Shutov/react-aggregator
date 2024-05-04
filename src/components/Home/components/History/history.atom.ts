import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { IProjectProps } from '@components/Projects/projects.types';



const { persistAtom } = recoilPersist();

export const historyAtom = atom<IProjectProps[]>({
  key: 'historyAtom',
  default: [],
  effects_UNSTABLE: [persistAtom],
});