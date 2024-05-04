import { RecoilValueReadOnly, selector } from 'recoil';
import homeApi from '@components/Home/home.api';
import projectApi from '@components/Projects/projects.api';
import { selectedCategoriesList } from '@components/Home/components/Categories/categories.atoms';
import { allProjectsList } from '@components/Projects/projects.atom';
import { IProjectProps } from '@components/Projects/projects.types';

export const filterProjectByCategories = selector({
  key:'project_filter_by_categories',
  get: ({ get }) => {
    const selectedSubCategories = get(selectedCategoriesList);
    const allProjects = get(allProjectsList)

    if (selectedSubCategories.length === 0) {
      return allProjects;
    }

    return allProjects.filter((project) =>
      project.categories?.some((category) =>
        selectedSubCategories.includes(category)
      )
    );
}})

export const getAllProject:RecoilValueReadOnly<IProjectProps[]> = selector({
  key:'get_all_project',
  get:async ()=>{
    const response = await projectApi.getAllProject()
    return response.status === 'success' && response.body
  }
})

