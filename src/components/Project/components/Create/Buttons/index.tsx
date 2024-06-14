import React from 'react';
import Button from '@shared/Button';
import useProjects from '@components/Project/hooks/useProject';
import { IProjectWithFunctions } from '@components/Project/projects.types';
interface IProps {
  project:IProjectWithFunctions
}
const Buttons:React.FC<IProps> = ({project}) => {
  return (
    <div className={'flex flex-row justify-center gap-x-6 mt-8'}>
      <Button classNameButton={'w-96'} type={'bt_secondary'} onClick={()=>project.updateProject} children={'Сохранить'}/>
      <Button classNameButton={'w-96'} type={'bt_secondary_outline'} children={'Опубликовать'}/>
    </div>
  );
};

export default Buttons;