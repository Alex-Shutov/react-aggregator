import React, { useEffect } from 'react';
import Select from '@shared/Selector';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getHomeEventsList } from '@components/Home/home.selectors';
import Categories from '@components/Home/components/Categories';
import History from '@components/Home/components/History';
import EventsFilter from '@components/Home/components/EventsFilter';
import VotingProjects from '@components/Home/components/VotingProjects';

const Home = () => {
  return (
    <div className="flex gap-6 mx-auto mb-20 max-w-[1184px] px-5">
      <div className="flex-shrink-0 w-64">
        <EventsFilter/>
        <Categories />
        <History/>
      </div>
      <div>
        <VotingProjects />
        {/*<PopularProjects />*/}
        {/*<SelectionProjects />*/}
      </div>
    </div>
  );
};

export default Home;