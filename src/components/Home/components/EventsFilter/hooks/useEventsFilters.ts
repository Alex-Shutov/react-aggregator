import React, { useEffect, useMemo, useRef } from 'react';
import useEvents from '@components/Home/components/EventsFilter/hooks/useEvents';
import { useRecoilState } from 'recoil';
import { homeSelectedEventFilter } from '@components/Home/home.atoms';
import { IHomeEventFilter } from '@components/Home/home.types';

const UseEventsFilters = () => {
  const {eventFiltersList,currentEvent} = useEvents()

  const [selectedEvent,setSelectedEvent] = useRecoilState(homeSelectedEventFilter)
  const isFirstRender = useRef(true);

  const filtersListWithCheck =  useMemo(()=>{
    return eventFiltersList?.map((el)=>{
      return {...el,checked:currentEvent?.id===el.id}
    })
  },[eventFiltersList])
  useEffect(() => {

    if(eventFiltersList && currentEvent && isFirstRender.current){
      isFirstRender.current = false
      setSelectedEvent({...currentEvent,checked:true})
    }
  }, [eventFiltersList,currentEvent]);


  const handleChangeEvent = (id:string) => {

    const event = eventFiltersList?.find(el=>el.id===id)

    if(event){
      const updateElement:IHomeEventFilter = {...event,checked:true}
      setSelectedEvent(prev=>{
        if(prev?.checked)
          prev.checked=false
        return updateElement
      })
    }
  }
  return {filtersListWithCheck,selectedEvent,handleChangeEvent}
};

export default UseEventsFilters;