import { ICategoryProps } from '@components/Home/components/Categories/categories.types';

export interface IProjectProps{
  image:string
  genre:string
  id:string
  name:string,
  description:string,
  categories:ICategoryProps[]
}