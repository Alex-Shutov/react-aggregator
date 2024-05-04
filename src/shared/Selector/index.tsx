import React, { ChangeEvent, CSSProperties, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';
import dropdownOutline from '@public//icons/arrows/dropdown_outline.svg';
import { IHomeEventFilter } from '@components/Home/home.types';
import useOutsideClick from '@hooks/useOutsideClick';
import OutsideClickLayout from '@shared/Layouts/OutsideClickLayout';

export interface ISelectOption {
  title: string
  value: string
}
interface IProps {
  label:string
  selectStyle?:CSSProperties
  optionStyle?:CSSProperties,
  name:string,
  onChange: (value:string)=>void
  options: IHomeEventFilter[];
  placeholder:string
  disabled?:boolean
}


const Select: React.FC<IProps> = ({label,
                                    optionStyle,
                                    selectStyle,
                                    onChange,
                                    name,
                                    options,
                                    placeholder,
                                    disabled,
                                  }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => {
    setIsOpen(old => !old);
  }


  return (
    <div
      className={`mb-10 w-full`}
    >
      <h2 className="text-2xl font-semibold mb-6">{label}</h2>
      <div className="bg-pnl_secondary p-4 relative min-w-[166px]">
    <OutsideClickLayout isOpen={isOpen} toggle={toggle}>
      <div
        className={`cursor-pointer flex items-center flex-row justify-between gap-2.5 font-medium text-sm bg-bt_selector_value pl-5 pr-4 rounded `}
      >
        <span className={'h-[40px] flex items-center'}>{options?.filter(el=>el.checked).length ? options?.filter(el=>el.checked)[0].name : "Выберите из списка"}</span>
        <div>
          <img src={dropdownOutline}/>
        </div>
      </div>
      {isOpen && (
        <div className="absolute top-[120%] left-0 z-10 w-full bg-dark-grey-color max-h-45 overflow-y-auto">
          <div className="p-2">
            {options?.map((item: IHomeEventFilter) => (
              <div
                key={item.id}
                className={`cursor-pointer p-2.5 flex items-center justify-between text-rgba-white-color font-medium hover:bg-pnl_first`}
                onClick={()=>onChange(item.id)}
              >
                {item.name}
                <div className="w-4 h-4 bg-center bg-no-repeat bg-contain transform rotate-180" style={{ backgroundImage: `url(${dropdownOutline})` }}></div>
              </div>
            ))}
          </div>
        </div>
      )}

    </OutsideClickLayout>
      </div>
    </div>
  );
}

export default Select;
