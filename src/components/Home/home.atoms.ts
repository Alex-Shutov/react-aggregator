import { atom } from 'recoil';
import homeApi from '@components/Home/home.api';
import { IEvent, IHomeEventFilter } from '@components/Home/home.types';


export const allEventsState = atom<IEvent[]>({
  key:'/home_event_all',
  default:[]
})

export const homeSelectedEventFilter = atom<IHomeEventFilter|undefined>({
  key:'/home_event_selected_filters',
  default:undefined
})





