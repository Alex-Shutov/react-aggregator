import React from "react";

interface Props {
  type?: string;
  placeholder?: string;
  height?: string;
  width?: string;
  padding?: string;
  after?:React.ReactNode
}

const Input = ({ type = 'text', placeholder = '', height = '3rem', width = '100%', padding = '0rem',after }: Props) => {
  return (
    <>
    <input
      type={type}
      placeholder={placeholder}
      className={`block flex-1 h-${height} p-${padding} w-${width} font-light text-white bg-rgba-grey-color rounded-md placeholder-rgba-white-color`}
    />
      {!!after && after}
</>
  );
};

export default Input;
