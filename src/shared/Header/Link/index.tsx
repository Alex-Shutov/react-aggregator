import React, { CSSProperties } from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  label: string;
  path: string;
  className?:string
}
const HeaderLink: React.FC<IProps>= ({label,path,className}) => {
  return (
    <button className={className}>
      <Link to={path} className="text-txt_main hover:text-txt_info">
        {label}
      </Link>
    </button>
  );
};

export default HeaderLink;