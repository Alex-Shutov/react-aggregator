import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import dropdownOutline from '@public/icons/arrows/dropdown_outline.svg';
import FireIcon from '@public/icons/voices.svg';
import Dropdown from '@shared/Dropdown';
import useOutsideClick from '@hooks/useOutsideClick';
import Fires from '@components/User/components/Fires';

interface IProps{
  user:{
    firstName:string,
    secondName:string,
    fires:number,
  }
}

interface IProfileIconProps{
  firstLetter:string
  secondLetter:string
}

const Profile: React.FC<IProps> = ({user}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const node = useRef<HTMLDivElement>(null);

  useOutsideClick(node, () => setIsActive(false));

  return (
    <div ref={node} className="relative flex items-center">
      <Link to="#" className="flex items-center mr-1 font-medium text-base text-white hover:text-blue-bg">
        <span className="mr-5 fw-bolder ">{user ? 'Профиль' : 'Гость'}</span>
        {user ? <div>
          <ProfileIcon firstLetter={user.firstName[0]} secondLetter={user.secondName[0]}/>
          <span className="w-4 h-4 bg-center bg-no-repeat bg-contain" style={{ backgroundImage: `url(${dropdownOutline})` }} />
        </div> : <ProfileIcon firstLetter={'П'} secondLetter={'П'}/>}
      </Link>
      {user && <ul className={`absolute min-w-full top-full right-0 transition-opacity duration-150 ${isActive ? 'opacity-100' : 'opacity-0 hidden'}`}>
        <li className="py-2 px-4">
          <Link to="/profile/information" className="text-base text-title-input hover:text-blue-bg">Профиль</Link>
        </li>
        <li className="py-2 px-4">
          <Link to="/profile/my-projects" className="text-base text-title-input hover:text-blue-bg">Мои проекты</Link>
        </li>
        <li className="py-2 px-4">
          <Link to="/auth/login" className="text-base text-title-input hover:text-blue-bg">Войти</Link>
        </li>
      </ul>
      }
      <Dropdown after={<Fires firesCount={user?.fires??null}/>} items={
        [
          {route:'/my-projects', title:'Мои проекты', disable:!user},
          {route:'/profile', title:'Профиль', disable:!user},
          {route:'/auth',title:'Войти', disable:!!user},
          {route:'/logout',title:'Выйти', disable:!user}
        ]
      }/>


      {user && <div className="flex items-center">
        <img src={FireIcon} alt="" className={`w-8 h-8 filter ${user.fires !== 0 ? '' : 'grayscale'}`} />
        <span className="text-white font-inter font-bold text-base ml-1">{user.fires}</span>
      </div>
      }
    </div>
  );
};


export default Profile;

const ProfileIcon:React.FC<IProfileIconProps> = ({firstLetter,secondLetter})=> {
  return <div
    className="w-[41px] h-[41px] rounded-full bg-bt_secondary opacity-90 flex items-center justify-center text-txt_main text-md font-bold">{firstLetter}{secondLetter}</div>
}
