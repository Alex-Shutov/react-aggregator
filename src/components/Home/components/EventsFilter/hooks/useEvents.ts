import { useEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getHomeEventsList } from '@components/Home/home.selectors';
import { allEventsState } from '@components/Home/home.atoms';
import { IEvent, IEventStatus } from '@components/Home/home.types';

const UseEvents = () => {
  const [eventFiltersList,setEventFilters] = useRecoilState(allEventsState)
  const currentEvent = useMemo(() => {
    return eventFiltersList?.filter((el)=>el.status!== IEventStatus.CLOSED)[0]
  },[eventFiltersList])

  const fetchedEventFiltersList = useRecoilValue(getHomeEventsList)

  const changeCurrentEventInEventsList = (updateEvent:IEvent) => {
    setEventFilters((prev)=>prev.map(el=>{
      if(el.id === updateEvent.id){
        return {...updateEvent}
      }
        return el
    }))
  }

  useEffect(() => {
    setEventFilters(fetchedEventFiltersList)
  }, [fetchedEventFiltersList]);


  return {eventFiltersList,currentEvent, changeCurrentEvent:changeCurrentEventInEventsList}
};

export default UseEvents;