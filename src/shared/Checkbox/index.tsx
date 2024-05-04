import React from 'react';

interface CheckboxProps {
  labelTxt: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ labelTxt }) => {
  return (
    <label className="flex items-center justify-start mb-4 ml-2 gap-2 text-base cursor-pointer">
      <input type="checkbox" className="hidden" />
      <div
        className={`w-6 h-6 border-2 border-gray-400 rounded-lg cursor-pointer transition-colors checked:bg-no-repeat checked:bg-center  checked:bg-[length:1.6rem] checked:border-black checked:bg-gray-300`}
      />
      <span className="text-lg text-gray-300">{labelTxt}</span>
    </label>
  );
};

export default Checkbox;