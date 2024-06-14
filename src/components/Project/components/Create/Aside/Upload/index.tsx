import React, { ChangeEvent, useState } from 'react';
import { useRecoilState } from 'recoil';
import Button from '@shared/Button';
import { IProjectWithFunctions, PROJECT_STATUSES } from '@components/Project/projects.types';
import { zipFileState } from '@components/Project/projects.create.atom';

interface IProps {
  project: IProjectWithFunctions;
}

const Index: React.FC<IProps> = ({ project }) => {
  const [uploadedFile, setUploadedFile] = useRecoilState(zipFileState);
  const [error, setError] = useState<string | null>(null);
  const asContainer = project?.status === PROJECT_STATUSES.DRAFT || project?.status === PROJECT_STATUSES.DECLINED;

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files ? event.target.files[0] : null;
    if (selectedFile) {
      const fileExtension = `.${selectedFile.name.split('.').pop()}`;
      if (fileExtension !== '.zip') {
        setError('Invalid file format. Only .zip files are allowed.');
        setUploadedFile(null);
        return;
      }
      setError(null);
      setUploadedFile(selectedFile);
    }
  };

  return (
    <div className={'mb-4'}>
      <input
        id={'project_button'}
        type="file"
        accept={'application/zip'}
        multiple={false}
        className="hidden"
        onChange={handleFileChange}
      />
      <label htmlFor={'project_button'}>
        <div>
          <Button
            asContainer={asContainer}
            type={'bt_secondary'}
            disabled={project?.status === PROJECT_STATUSES.APPROVED || project.status === PROJECT_STATUSES.CHECK}
            classNameButton={`w-full h-12 ${asContainer && 'text-center pt-[0.6rem]'}`}
          >
            Загрузить проект
          </Button>
        </div>
      </label>
      {error && <div className="text-red-500 mt-2">{error}</div>}
      {uploadedFile && <div className="text-green-500 mt-2">Файл загружен: {uploadedFile.name}</div>}
    </div>
  );
};

export default Index;
