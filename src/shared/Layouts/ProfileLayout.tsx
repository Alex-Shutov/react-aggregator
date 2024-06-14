// components/ProfileLayout/ProfileLayout.tsx
import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import exitSvg from '@public/icons/exit.svg';
import PublicationNotice from '@shared/PublicationNotice';
import { SetterOrUpdater } from 'recoil';
import Button from '@shared/Button';
import { StatusObject } from '@components/User/components/Proifle/profile.atoms';

interface IProps {
  label: string,
  buttonLink: string[],
  status:any,
  subSubmitText: string,
  setSubSubmitText: SetterOrUpdater<string>,
  button: any,
  saveButtonHandler: () => void
}

const ProfileLayout: React.FC<IProps> = ({
                                           label,
                                           buttonLink,
                                           status,
                                           subSubmitText,
                                           button,
                                           saveButtonHandler,
                                         }) => {
  console.log(saveButtonHandler,'save');

  return (
    <div className="mx-auto mb-28 max-w-screen-xl px-8">
      <div className="mb-2 text-3xl font-semibold text-txt_main">{label}</div>
      <div className="mb-16 text-2xl text-txt_secondary">Профиль</div>
      <div className="flex flex-col lg:flex-row gap-16 justify-between">
        <div className={'flex-initial w-64'}>
          <h2 className={'mb-2'}>Редактирование</h2>
          <PublicationNotice className={`text-xl ${status[1]}`}>
            {status[0]}
          </PublicationNotice>
          <nav className="mb-10 p-10 bg-pnl_secondary">
            <ul>
              <li className="mb-4">
                <NavLink
                  to={'my-projects'}
                  className={({ isActive }) => (isActive ? 'text-txt_main text-lg' : ' text-lg text-txt_secondary hover:text-txt_main')}
                >
                  Мои проекты
                </NavLink>
              </li>
              <li className="mb-4">
                <NavLink
                  to={'information'}
                  className={({ isActive }) => (isActive ? 'text-txt_main' : 'text-txt_secondary hover:text-txt_main')}
                >
                  Данные пользователя
                </NavLink>
              </li>

            </ul>
            <button className="mt-20 flex items-center gap-2 text-txt_ind_info">
              <img src={exitSvg} alt="Выход" className="w-8 h-8" />
              Выход
            </button>
          </nav>
          {buttonLink.length > 0 && (
            <Button type={'bt_primary'} to={buttonLink[1]}>{buttonLink[0]}</Button>
          )}
          {button && (
            <Button onClick={saveButtonHandler} classNameContainer={'!block'} classNameButton={'w-full h-16 font-semibold text-xl flex items-center justify-center rounded-md transition-colors duration-300'} type={button.type} to={button.to} disabled={button?.disabled}>{button.children}</Button>
            // <button
            //   type="button"
            //   onClick={saveButtonHandler}
            //   disabled={button?.disabled}
            //   className={`w-full h-20 font-semibold text-2xl flex items-center disabled:bg-bt_disabled disabled:text-txt_disabled justify-center rounded-md transition-colors duration-300 ${
            //     button.styles.backgroundColor === 'green'
            //       ? 'bg-bt_primary hover:bg-bt_primary_hover  active:bg-bt_primary_pressed'
            //       : 'bg-bt_secondary hover:bg-bt_secondary_hover active:bg-bt_secondary_pressed'
            //   } ${button.styles.color === 'white' ? 'text-txt_main' : 'text-black'}`}
            // >
            //   {button.children}
            // </button>
          )}
          {subSubmitText && (
            <div className="mt-4 text-sm font-medium text-txt_secondary">
              {subSubmitText}
            </div>
          )}
        </div>
        <Outlet />
      </div>
    </div>
  );
};

export default ProfileLayout;
