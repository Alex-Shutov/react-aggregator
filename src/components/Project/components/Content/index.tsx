import React from 'react';
import SwiperProject from '@components/Project/components/SwiperProject';
import ProjectDescription from '@components/Project/components/Description';
import ProjectInstructions from '@components/Project/components/Instructions';
import { IProjectProps } from '@components/Project/projects.types';

interface IProps{
  project:IProjectProps
}
const ProjectContent: React.FC<IProps> = ({project}) => (
  <div className="flex-1 lg:flex-[3]">
    <div className="mb-20">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-semibold">Об игре</h2>
        <div className="flex space-x-2">
          <button className="w-28 h-10 border border-gray-400 rounded-md text-sm font-medium text-gray-200 hover:underline disabled:opacity-50 disabled:hover:no-underline" disabled>
            HTML5
          </button>
          <button className="w-28 h-10 border border-gray-400 rounded-md text-sm font-medium text-gray-200 hover:underline">
            Git
          </button>
        </div>
      </div>
      <SwiperProject id={project?.id} length={4} />
    </div>
    <ProjectDescription description={project.description} />
    <ProjectInstructions />
  </div>
);

export default ProjectContent;
