import React, { HTMLAttributes } from 'react';
import Image from '@shared/Image';

interface IProps extends  HTMLAttributes<HTMLImageElement>{
  id:string
  imgName:string,
  className?:string
}
const Index:React.FC<IProps> = ({id,imgName,className, ...props}) => {
  return (
    <Image src={`http://localhost:9000/${id}/${imgName}`} className={className} {...props}/>
  );
};

export default Index;