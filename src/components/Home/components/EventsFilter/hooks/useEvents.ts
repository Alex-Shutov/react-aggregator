import { useEffect } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { getHomeEventsList } from '@components/Home/home.selectors';
import { allEventsState, currentEventAtom } from '@components/Home/home.atoms';
import { IEvent, IEventStatus } from '@components/Home/home.types';

const UseEvents = () => {
  const [eventFiltersList, setEventFilters] = useRecoilState(allEventsState);
  const fetchedEventFiltersList = useRecoilValue(getHomeEventsList);
  const [currEvent, setCurrentEvent] = useRecoilState(currentEventAtom);

  useEffect(() => {
    console.log("useEffect triggered", { currEvent, fetchedEventFiltersList,eventFiltersList });

    if (currEvent) {
      console.log("currEvent already set, exiting useEffect");
      return;
    }

    const curEvent = fetchedEventFiltersList?.find(
      (el: IEvent) => el.status === IEventStatus.OPENED
    );

    if (curEvent) {
      console.log("Setting current event", curEvent);
      setCurrentEvent({ ...curEvent, checked: true });
    }
  }, [fetchedEventFiltersList, currEvent, setCurrentEvent]);


  const changeCurrentEventInEventsList = (updateEventId: string) => {
    const updateEvent = eventFiltersList.find(el => el.id === updateEventId);
    if (updateEvent) {
      console.log("Changing current event", updateEvent);
      setCurrentEvent(updateEvent);
      setEventFilters((prev) =>
        prev.map((el) => {
          if (el.id === updateEvent.id) {
            return { ...updateEvent, checked: true };
          } else if (el.checked) {
            return { ...el, checked: false };
          }
          return el;
        })
      );
    }
  };

  useEffect(() => {
    console.log("Fetched event filters list updated", fetchedEventFiltersList);
    setEventFilters(
      fetchedEventFiltersList?.map((event) => ({
        ...event,
        checked: event.status === IEventStatus.OPENED,
      }))
    );
  }, [fetchedEventFiltersList, setEventFilters]);

  return { eventFiltersList, currentEvent: currEvent, changeCurrentEvent: changeCurrentEventInEventsList };
};

export default UseEvents;
