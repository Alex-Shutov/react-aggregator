export interface ICategoryProps{
  id:string
  name:string
  childCategories?:ICategoryProps[]
}