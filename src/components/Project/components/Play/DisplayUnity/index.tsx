import { useFullscreen } from '@/components/Project/hooks/useFullScreen';
import React from 'react';
import { Unity, useUnityContext } from "react-unity-webgl";
import roll_up from '@public/icons/roll_up.svg';
import unwrap from '@public/icons/unwrap.svg';

interface IProps{
  id:string
  fullScreen?:boolean
}
const  DisplayUnity:React.FC<IProps> = ({id,fullScreen}) => {
  const credentials = {
    loaderUrl:`http://localhost:9000/${id}/devourgame3.loader.js`,
    dataUrl:`http://localhost:9000/${id}/devourgame3.data`,
    frameworkUrl:`http://localhost:9000/${id}/devourgame3.framework.js`,
    codeUrl:`http://localhost:9000/${id}/devourgame3.wasm`,
    // streamingUrl:`http://localhost:9000/${id}/StreamingUrl`

  }
  const {unityProvider, sendMessage, addEventListener, removeEventListener, isLoaded,UNSAFE__unityInstance,} =
    useUnityContext({
      loaderUrl: credentials.loaderUrl,
      dataUrl: credentials.dataUrl,
      frameworkUrl: credentials.frameworkUrl,
      codeUrl:  credentials.codeUrl,
      streamingAssetsUrl:"http://localhost:3000/NestMinio/download/StreamingAssets"
    });

  return (
    <>
    <Unity unityProvider={unityProvider}
           style={{ width: fullScreen? "100%" : 900, height: fullScreen? "100%": 600, overflow: "hidden", zIndex: 0 }} />
  </>
  )
}

export default DisplayUnity