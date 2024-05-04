import React from 'react';
import Header from '../Header';
import { Outlet } from 'react-router-dom';
import Footer from '@shared/Footer';

interface IProps{
  after?:React.ReactNode
  children?: React.ReactNode;
}

const MainLayout:React.FC<IProps> = ({ after,children }:IProps) => {
  return (
    <div className={'min-h-screen bg-pnl_first'}>
      <Header after={after}>
        {children}
      </Header>
      <Outlet/>
      <Footer/>
    </div>
  );
};

export default MainLayout;