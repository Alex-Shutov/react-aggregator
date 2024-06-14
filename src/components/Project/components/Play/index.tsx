import React from "react";
import { Link, useParams } from 'react-router-dom';
import Display from '@components/Project/components/Play/Display';
import useProjects from '@components/Project/hooks/useProject';

function Play() {
  const { projId } = useParams()
  const project = useProjects(projId)

  return (
    <div className="mx-auto max-w-screen-xl px-5">
      <h1 className="text-4xl font-bold mb-5">${project?.name}</h1>
      <nav className="text-secondary mb-5">
        <Link to="/" className="text-secondary hover:text-info">Проекты</Link>
        <span> &gt; </span>
        <span>Страница проекта</span>
      </nav>
      <Display id={project?.id??projId} />
    </div>
  );
}

export default Play



