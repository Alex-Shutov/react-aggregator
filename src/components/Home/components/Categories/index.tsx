import React from 'react';
import useCategories from '@components/Home/components/Categories/hooks/useCategories';
import { ICategoryProps } from '@components/Home/components/Categories/categories.types';
import Checkbox from '@shared/Checkbox';


const Categories: React.FC = () => {

  const { categoriesList } = useCategories()

  return (
    <div className="mb-8 bg-[#2D2D2D] p-7 font-inter text-[#C1D9E2]">
      <h2 className="mb-6 text-xl font-normal text-[#B6B6B6]">Категории</h2>
      <div>
        <Checkbox labelTxt={'Все категории'} />
        {categoriesList?.map(item => (
          <div key={item.id} className="mt-10 mb-9">
            <h3 className="mb-6 text-xl font-normal">{`${item.name}`}</h3>
            {item.childCategories && item.childCategories.map(({name}, index) => (
              <Checkbox key={index} labelTxt={name} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;