import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import HeaderLink from './Link';
import HamburgerButton from './HamburgerButton';
import logo from '@public/icons/logo.svg'
import { useRecoilState } from 'recoil';
import menuAtom from '../../components/Menu/menu.atom';

interface IProps{
  after?:React.ReactNode
  children:React.ReactNode
}
const Header:React.FC<IProps> = ({children,after}) => {
  const [state,setMenuOpen] = useRecoilState(menuAtom)

  const handleClick = () => {
    const newState =  !state.isMenuOpen
    setMenuOpen({ isMenuOpen:newState })
  }

  return (
    <div className={'sticky top-0 z-40 mb-16 bg-pnl_secondary'}>
      <div className="flex items-center justify-between mx-auto max-w-screen-xl px-6 py-4">
        <div className={'lg:hidden'}>
          <HamburgerButton/>
        </div>
        <Link to="/">
          <img src={logo} alt="Logo" className="transition-transform hover:scale-105" />
        </Link>
        <ul className={`hidden lg:block lg:list-none lg:my-0 `}>
        <ul className="flex flex-row relative m-0 list-none ">
          {children}
        </ul>
        </ul>
        {after}
        {/*<div className={'fixed h-screen top-0 left-0 bottom-0 z-30 d-block w-[40rem] max-w-full mt-0 pt-16 pr-0 items-stretch  bg-pnl_first transform translate-x--full transition ease-in-out duration-300 '} >*/}
        {/*  {children}*/}
        {/*</div>*/}
      </div>
    </div>
  );
};

export default Header;