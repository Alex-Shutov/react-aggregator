import React from 'react';
import ProjectPlay from '@components/Project/components/Aside/ProjectPlay';
import RatingProject from '@components/Project/components/Aside/RatingProject';
import Team from '@components/Project/components/Aside/Team';
import TeamView from '@components/Teams/components/View';
import useProject from '@components/Project/hooks/useProject';


interface ProjectAsideProps {
  projName: string;
  id: string;
}

const ProjectAside: React.FC<ProjectAsideProps> = ({ projName, id }) => {
  const proj = useProject(id)
    console.log(proj,id,'projid123');
  return <div className="flex-1 lg:max-w-xs space-y-4">
    <ProjectPlay path={`play`} name={projName} id={id} />
    <TeamView team={proj.team} />
    {/*<RatingProject endVoting={false} currentPlace={2} currentVoices={40} fullVoices={70} />*/}
    {/*<Team countOnTab={3} />*/}
    {/*<History title="Проекты команды" />*/}
  </div>
}

;

export default ProjectAside;
