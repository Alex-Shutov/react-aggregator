import React from "react";
import arrow from "../../assets/images/icons/arrows/arrow_left.svg";

interface PaginationProps {
  current: number;
  total: number;
}

const Pagination: React.FC<PaginationProps> = ({ current = 1, total }) => {
  return (
    <div className="flex items-center text-light-grey-color">
      <PaginationButtonLeft disabled={current === 1} type='button'>
        <img src={arrow} alt="Left arrow"/>
      </PaginationButtonLeft>
      <div className="px-4 text-base">{current} из {total}</div>
      <PaginationButtonRight disabled={current === total} type='button'>
        <img src={arrow} alt="Right arrow"/>
      </PaginationButtonRight>
    </div>
  );
};

interface PaginationButtonProps {
  disabled: boolean;
  type: "button";
  children: React.ReactNode;
}

const PaginationButton: React.FC<PaginationButtonProps> = ({ children, disabled, type }) => {
  return (
    <button
      className={`transition-opacity duration-300 ease-in-out ${disabled ? 'opacity-45' : 'hover:opacity-80'}`}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
};

const PaginationButtonRight: React.FC<PaginationButtonProps> = ({ children, disabled, type }) => {
  return (
    <PaginationButton disabled={disabled} type={type}>
      {children}
    </PaginationButton>
  );
};

const PaginationButtonLeft: React.FC<PaginationButtonProps> = ({ children, disabled, type }) => {
  return (
    <PaginationButton disabled={disabled} type={type}>
      {children}
    </PaginationButton>
  );
};

export default Pagination;
