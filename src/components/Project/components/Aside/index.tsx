import React from 'react';
import ProjectPlay from '@components/Project/components/Aside/ProjectPlay';
import RatingProject from '@components/Project/components/Aside/RatingProject';
import Team from '@components/Project/components/Aside/Team';


interface ProjectAsideProps {
  projName: string;
  id: string;
}

const ProjectAside: React.FC<ProjectAsideProps> = ({ projName, id }) => (
  <div className="flex-1 lg:max-w-xs space-y-4">
    <ProjectPlay path={`play`} name={projName} id={id} />
    {/*<RatingProject endVoting={false} currentPlace={2} currentVoices={40} fullVoices={70} />*/}
    {/*<Team countOnTab={3} />*/}
    {/*<History title="Проекты команды" />*/}
  </div>
);

export default ProjectAside;
