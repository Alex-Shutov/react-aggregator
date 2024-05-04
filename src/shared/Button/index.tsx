import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

type ButtonType = "bt_primary" | "bt_danger" | "bt_secondary" | "bt_primary_outline" | "bt_danger_outline" | "bt_secondary_outline"
interface IButtonProps {
  type:ButtonType,
  style?:CSSProperties
  to?: string;
  children?: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
                                          children,
                                          to = '',
                                          type
                                        }) => {
  const isOutline = type.includes('outline')
  const btType = isOutline ? type.slice(0,type.lastIndexOf('_')) : type

  const renderButton = (cls:string) => (
    <button className={`w-28 h-10 font-semibold rounded-sm transition duration-300 ${cls}`}>
      {children}
    </button>
  )


  return (
    <Link to={to} className="inline-block">
      {isOutline ?
       renderButton(`outline outline-1 outline-${btType} hover:outline-${btType}_hover focus:outline-${btType}_focus text-${btType}`)
      :
        renderButton(`bg-${btType} hover:bg-${btType}_hover focus:bg-${btType}_focus text-txt_main`)
      }
    </Link>
  );
};

export default Button;