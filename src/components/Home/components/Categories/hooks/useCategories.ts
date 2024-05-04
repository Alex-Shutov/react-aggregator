import React, { useEffect } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import { allCategoriesList, selectedCategoriesList } from '@components/Home/components/Categories/categories.atoms';
import { getAllCategories } from '@components/Home/components/Categories/categories.selectors';
import { ICategoryProps } from '@components/Home/components/Categories/categories.types';

const UseCategories = () => {
  const [categoriesList,setCategoriesList] = useRecoilState(allCategoriesList)
  const [selectedCategories,setSelectedCategories] = useRecoilState(selectedCategoriesList)
  const fetchedAllCategories = useRecoilValue(getAllCategories)

  const toogleCategory = (id:string) => {

    setSelectedCategories((prevSelectedCategories) => {
      const findedCategory = prevSelectedCategories.find(el=>el.id === id)
      if (findedCategory){
        return prevSelectedCategories.includes(findedCategory)
          ? prevSelectedCategories.filter((category) => category.id !== findedCategory.id)
          : [...prevSelectedCategories, findedCategory]
      }
      return prevSelectedCategories
    }
    );
  };



  const isCategorySelected = (categoryId: string) => {
    const findedCategory = selectedCategories.find(el=>el.id === categoryId)
    return findedCategory && selectedCategories.includes(findedCategory) ;
  }



  useEffect(() => {
    setCategoriesList(fetchedAllCategories)
  }, [fetchedAllCategories]);



  return {categoriesList,toogleCategory,isCategorySelected}
};

export default UseCategories;