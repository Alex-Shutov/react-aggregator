import MainLayout from '@shared/Layouts/MainLayout';
import React from 'react';
import HeaderLink from '@shared/Header/Link';
import { useRecoilValue } from 'recoil';
import userAtom from '@components/User/user.atom';
import Profile from '@components/User/components/Proifle';

const Main = () => {
  const { loadedUser } = useRecoilValue(userAtom)
  console.log(loadedUser,'loadedUser');
  return (
      <MainLayout
        after={<Profile user={loadedUser}/>}

      >
        <HeaderLink path={'/to1'} label={'Витрина проектов'} className={'mr-8'}/>
        <HeaderLink path={'/to1'} label={'Защиты проектов'} className={'mr-8'}/>
        <HeaderLink path={'/to1'} label={'Заказать проект'} className={'mr-8'}/>
        {/*<MainLayout/>*/}
      </MainLayout>
  );
};

export default Main;