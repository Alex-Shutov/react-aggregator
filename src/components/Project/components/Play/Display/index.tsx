import unwrap from "@public/icons/unwrap.svg";
import roll_up from "@public/icons/roll_up.svg";
import React from 'react';
import DisplayUnity from '@components/Project/components/Play/DisplayUnity';
import { useFullscreen } from '@components/Project/hooks/useFullScreen';

type DisplayProps = {
  id:string
};

const Display:React.FC<DisplayProps> = ({ id }: DisplayProps) => {
  const { fullscreenRef, enterFullscreen, exitFullscreen, fullscreenActive } = useFullscreen();

  const bucketName = id

  return (
    <div className="relative mx-auto max-w-screen-lg" ref={fullscreenRef}>
      <div className={`flex flex-col items-center justify-center w-full ${fullscreenActive ? 'w-screen h-screen' : 'h-full'} bg-white`}>
        <DisplayUnity fullScreen={fullscreenActive} id={bucketName} />
      </div>
      {fullscreenActive ? (
        <button className="mt-2 w-full flex justify-end items-center gap-2" onClick={exitFullscreen}>
          <span className="text-secondary text-lg">Свернуть</span>
          <img src={roll_up} alt="Свернуть" />
        </button>
      ) : (
        <button className="mt-2 w-full flex justify-end items-center gap-2" onClick={enterFullscreen}>
          <span className="text-secondary text-lg">Развернуть</span>
          <img src={unwrap} alt="Развернуть" />
        </button>
      )}
    </div>
  );
}
export default Display