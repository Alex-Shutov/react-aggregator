import React from 'react';
import Select from '@shared/Selector';
import useEventsFilters from '@components/Home/components/EventsFilter/hooks/useEventsFilters';

const EventsFilter = () => {
  const {filtersListWithCheck,selectedEvent,handleChangeEvent} = useEventsFilters()
  return (
    <Select

      label={'Выбор события'}
      placeholder={'Выберите семестр'}
      name={'event_select'}
      options={filtersListWithCheck}
      onChange={handleChangeEvent}
    />
  );
};

export default EventsFilter;