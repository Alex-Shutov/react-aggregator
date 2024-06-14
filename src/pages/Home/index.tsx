import React, { Suspense, useEffect } from 'react';
import Select from '@shared/Selector';
import { useRecoilState, useRecoilValue } from 'recoil';
import { getHomeEventsList } from '@components/Home/home.selectors';
import Categories from '@components/Home/components/Categories';
import History from '@components/Home/components/History';
import EventsFilter from '@components/Home/components/EventsFilter';
import VotingProjects from '@components/Home/components/VotingProjects';
import PopularProjects from '@components/Home/components/PopularProjects';
import SelectionProjects from '@components/Home/components/SelectionProjects';
import useUser from '@components/User/hooks/useUser';

const Home = () => {
  const {user} = useUser()
  console.log(user,'home');
  return (
    <div className="flex gap-6 mx-auto mb-20 max-w-[1184px] px-5">
      <div className="flex-shrink-0 w-64">
        <EventsFilter/>
        <Categories />
        <History/>
      </div>
      <div>
        <VotingProjects />
        <Suspense fallback={<div/>}>
        <SelectionProjects />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;