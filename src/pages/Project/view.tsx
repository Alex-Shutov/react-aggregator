import React from 'react';
import { useParams } from 'react-router-dom';
import useProject from '@components/Project/hooks/useProject';
import ProjectHeader from '@components/Project/components/Header';
import ProjectAside from '@components/Project/components/Aside';
import ProjectContent from '@components/Project/components/Content';

const ProjectView = () => {
  const { projId } = useParams<{ projId: string }>();
  const project = useProject(projId);
  if(projId === 'create') return <></>

  return (
    <div className="max-w-[85rem] mx-auto mb-28 px-8">
      <ProjectHeader title={project?.name} />
      <div className="flex justify-between gap-24 mb-20 flex-col lg:flex-row lg:space-x-4">
        <ProjectAside projName={project?.name} id={project?.id} />
        <ProjectContent project={project} />
      </div>
    </div>
  );
};

export default ProjectView;