import React, { useCallback } from 'react';
import { useRecoilValue } from 'recoil';
import { authedAtom as userAtom } from '@components/User/user.atom';
import MainLayout from '@shared/Layouts/MainLayout';
import ProfileDropdown from 'src/components/User/components/Proifle/components/Dropdown';
import HeaderLink from '@shared/Header/Link';
import Header from '@shared/Header';
import { removeToken } from '@shared/http';
import { useNavigate } from 'react-router-dom';
import useUser from '@components/User/hooks/useUser';

const HeaderInner = () => {
  const { user } = useUser()
  const navigator = useNavigate()
  console.log(user,'header');
  const handleLogout = useCallback(async ()=>{
    await removeToken()
    window.location.reload()
    navigator('/')
  },[])
  return (
    <Header
      after={<ProfileDropdown handleLogout={handleLogout} user={user}/>}
    >
      <HeaderLink path={'/to1'} label={'Витрина проектов'} className={'mr-8'}/>
      <HeaderLink path={'/to1'} label={'Защиты проектов'} className={'mr-8'}/>
      <HeaderLink path={'/to1'} label={'Заказать проект'} className={'mr-8'}/>
      {/*<MainLayout/>*/}
    </Header>
  );
};

export default HeaderInner;