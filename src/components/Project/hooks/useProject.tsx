import React, { useEffect, useMemo } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue, useResetRecoilState, useSetRecoilState } from 'recoil';
import {
  allProjectsList,
  currentProjId,
  getCurrentProjectAtom,
  IProjectList,
} from '@components/Project/projects.atom';
import { getAllProject, getCurrentProject } from '@components/Project/projects.selector';
import projectApi from '@components/Project/projects.api';
import { IProjectProps, IProjectWithFunctions } from '@components/Project/projects.types';
import { useNavigate } from 'react-router-dom';
import { teamState } from '@components/Teams/teams.atoms';
import useEvents from '@components/Home/components/EventsFilter/hooks/useEvents';
import useTeam from '@components/Teams/hooks/useTeam';
import useEffectOnce from '@hooks/useEffectOnce';
import { handleSubmit } from '@utils/snackbar';



function useProjects(id: string | undefined):IProjectWithFunctions
function useProjects(): IProjectList;

function useProjects (id?: string):IProjectWithFunctions | IProjectList  {
  const {team} = useTeam()
  const {currentEvent}= useEvents()
  const [project,setProject] = useRecoilState(getCurrentProjectAtom)
  const [allProjects,setAllProjects] = useRecoilState(allProjectsList)
  const [currentId,setCurrentId] = useRecoilState(currentProjId)
  const resetCurrent = useResetRecoilState(currentProjId)
  const navigation = useNavigate()


  const getAllProjects = useRecoilValue(getAllProject)
  const getCurrentProj = useRecoilValue(getCurrentProject)
  setAllProjects(getAllProjects)
  // useEffectOnce(() => {
  //   if(id === 'create' && !currentId && !project){
  //     initializeProject().then((proj)=>navigation(`/project/${proj?.id}/edit`))
  //   }
  // }, [id,currentEvent,team]);

  // const getCurrentProject = () => useRecoilValue(getCurrentProjectAtom)
  // useEffect(() => {
  //   setAllProjects(getAllProjects)
  // }, []);

  useEffect(() => {
    return ()=>{
      resetCurrent()
    }
  }, []);

  const initializeProject = async () => {
    if(currentEvent && team) {
      return await projectApi.createProject(currentEvent.id, team?.id).then((resp) => {
        if (resp.status === 'success') {
          setProject(resp.body.project)
          setCurrentId(resp.body.project.id)
          return(resp.body.project)
        }
        return (resp.body)
      })
    }
  };

  const updateProject = async () => {
    const savedProject = project && await projectApi.updateProject(project).then((resp)=>{
      if(resp.status==='success'){
        setProject(resp.body.project);
        handleSubmit('Проект сохранен')
      }
    })
  };

  const publicProject = async () => {
    const savedProject = project && await projectApi.publicProj(project).then((resp)=>{
      if(resp.status==='success'){
        setProject(resp.body.project);
        handleSubmit('Проект опубликован')
      }
    })
  };

  const updateProjectState = (updatedProject: IProjectProps)  =>{
    setProject(updatedProject)
  }


  const result = useMemo(()=>{
    if(id && id!=='create') {
      debugger
      if(id && project)
        return {...project,updateProjectState,initializeProject,updateProject,publicProject}  as IProjectWithFunctions
      if (allProjects?.projects?.length) {
        const findedProj = allProjects?.projects.find(el => el.id === id)
        if (!findedProj) {
          setCurrentId(id)

          return {...project,updateProjectState,initializeProject,updateProject,publicProject}  as IProjectWithFunctions
        } else {
          return {...findedProj,updateProjectState,initializeProject,updateProject,publicProject}  as IProjectWithFunctions
        }
      }
      else {
        setCurrentId(id)
        setProject(getCurrentProj)
        return {...project,updateProject:updateProjectState,initializeProject}  as IProjectWithFunctions
      }
    }
    else{
      return {projects:allProjects?.projects,page:allProjects?.page, totalCount:allProjects?.totalCount}
    }
  },[allProjects?.page, allProjects?.projects, allProjects?.totalCount, getCurrentProj, id, initializeProject, project, setCurrentId, setProject, updateProjectState])


  // if(id && id!=='create') {
  //   debugger
  //   if (allProjects?.projects?.length) {
  //     const findedProj = allProjects?.projects.find(el => el.id === id)
  //     if (!findedProj) {
  //       setCurrentId(id)
  //
  //       return {...project,updateProject:updateProjectState,initializeProject}  as IProjectWithFunctions
  //     } else {
  //       return {...findedProj,updateProject:updateProjectState,initializeProject}  as IProjectWithFunctions
  //     }
  //   }
  //   else {
  //     debugger
  //     setCurrentId(id)
  //     setProject(getCurrentProj)
  //     return {...project,updateProject:updateProjectState,initializeProject}  as IProjectWithFunctions
  //   }
  // }
  // else{
  //   return {projects:allProjects?.projects,page:allProjects?.page, totalCount:allProjects?.totalCount}
  // }
  return { ...result }


};

export default useProjects;