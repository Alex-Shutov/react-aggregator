import { RecoilState, RecoilValueReadOnly, selector } from 'recoil';
import projectApi from '@components/Project/projects.api';
import { allProjectsList, currentProjId, getCurrentProjectAtom } from '@components/Project/projects.atom';
import { currentEventAtom } from '@components/Home/home.atoms';
import {
  currentProjectPaginationPage,
  currentSortType,
} from '@components/Home/components/SelectionProjects/Pagination/pagination.atom';
import { allCategoriesList } from '@components/Home/components/Categories/categories.atoms';
import { ICategoryProps } from '@components/Home/components/Categories/categories.types';
import { teamState } from '@components/Teams/teams.atoms';
import { useNavigate } from 'react-router-dom';

// export const filterProjectByCategories = selector({
//   key:'project_filter_by_categories',
//   get: ({ get }) => {
//     const selectedSubCategories = get(allCategoriesList);
//     const allProjects = get(allProjectsList)
//
//     if (selectedSubCategories.length === 0) {
//       return allProjects;
//     }
//
//     return allProjects.projects.filter((project) =>
//       project.categories?.some((category) =>
//         selectedSubCategories.includes(category)
//       )
//     );
// }})

export const getAllProject:RecoilValueReadOnly<any> = selector({
  key:'get_all_project',
  get:async ({get})=>{
    const categoriesIds = getCheckedCategoriesIds(get(allCategoriesList))
    const eventId = get(currentEventAtom)
    const page = get(currentProjectPaginationPage)
    const sortType = get(currentSortType)
    const limit = 10
    if(eventId?.id) {

      const response = await projectApi.getProjectsByEvent(eventId.id, categoriesIds, page, limit,sortType)
      if(response.status === 'success'){
        return response.body
      }
    }
  }
})

export const getCurrentProject:RecoilValueReadOnly<any> = selector({
  key:'get_project',
  get:async ({get}) =>{
    const currentId = get(currentProjId)
    debugger
    if(currentId && currentId!=='create'){
      const response = await projectApi.getProject(currentId)
      return response.body.project
    }
    return null
  },


})

function getCheckedCategoriesIds(categories: ICategoryProps[]): string[] {
  const checkedIds: string[] = [];

  for (const category of categories) {
    if (category.isChecked) {
      checkedIds.push(category.id);
    }

    if (category.childCategories) {
      const childIds = getCheckedCategoriesIds(category.childCategories);
      checkedIds.push(...childIds);
    }
  }

  return checkedIds;
}


export const createNewProject:RecoilValueReadOnly<string> = selector({
  key: '/create_new_proj',
  get: async ({ get }) => {
    const currId = get(currentProjId)
    const project = get(getCurrentProjectAtom)
    const currentEvent = get(currentEventAtom)
    const team=get(teamState)
    debugger
    if(!currId && !project){
      if(currentEvent && team){
        const res:any =  await projectApi.createProject(currentEvent.id, team?.id).then((resp) => {
          if (resp.status === 'success') {
            return(resp.body.project)
          }
        })
        return res?.id
      }
    }
    return ''
  }

})
