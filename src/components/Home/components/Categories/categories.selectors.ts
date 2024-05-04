import { selector } from 'recoil';
import homeApi from '@components/Home/home.api';

export const getAllCategories = selector({
  key:'categories_get_all',
  get:async ()=>{
    const response =  await homeApi.getAllCategories()
    if (response.status==='success'){
      return response.body
    }
  }
})



