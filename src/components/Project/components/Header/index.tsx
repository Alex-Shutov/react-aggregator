import React from 'react';
import { Link } from 'react-router-dom';

interface ProjectHeaderProps {
  title: string;
}

const ProjectHeader: React.FC<ProjectHeaderProps> = ({ title }) => (
    <div className={'mb-20'}>
      <h1 className="text-2xl font-medium mb-2">Страница проекта</h1>
      <div className="text-pnl_add_second">
        <Link to="/" className="inline text-txt_secondary">
          Проекты
        </Link>
        <span> &gt; </span>
        <span className={'text-txt_third'}>{title}</span>
      </div>
    </div>
  )
;

export default ProjectHeader;
