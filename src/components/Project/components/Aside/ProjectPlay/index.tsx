import React from "react";
import { Link } from "react-router-dom";
import ProjectImage from '@shared/Image/ProjectImage';
import Button from '@shared/Button';

interface ProjectPlayProps {
  name: string;
  id: string;
  path?: string;
}

const ProjectPlay: React.FC<ProjectPlayProps> = ({ name, id, path = "" }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-medium mb-4">{name}</h2>
      <ProjectImage
        className="inline-block mb-6 object-cover w-[26.1rem] h-[15.3rem] rounded-md"
        imgName={`main_image_0.jpg`}
        id={id}
      />
      <Button to={path} classNameButton={'basis-full h-12'} classNameContainer={'w-full text-xl flex justify-center'} type={'bt_primary'}>Играть</Button>

    </div>
  );
};

export default ProjectPlay;
