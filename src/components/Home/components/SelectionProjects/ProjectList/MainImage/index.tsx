import React, { useRef } from 'react';

interface IProps{
  id:string
}
const Index :React.FC<IProps>= ({id}) => {
  const imgRef = useRef(null)
  const handleSetDefualtImg = (target: EventTarget & HTMLImageElement) => {
    // TODO Нужна заглушка
    target.src = 'https://freepngimg.com/thumb/categories/1736.png'
  }
  return (
    <div className="w-52 mr-8  h-22">
      <img
        ref={imgRef}
        onError={(event)=>handleSetDefualtImg(event.currentTarget)}
        src={`http://localhost:9000/${id}/main_image_0.jpg`}
        alt=""
        className="w-full h-full object-cover rounded"
      />
    </div>
  );
};

export default Index;