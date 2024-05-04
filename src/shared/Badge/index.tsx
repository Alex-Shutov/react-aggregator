
const Badge: React.FC<{ number: number,boldText?:string,defaultText:string }> = ({ number,boldText, defaultText }) => {

  return (
    <>
    <div className="relative w-8 h-12 mr-2">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-yellow-400 to-red-500 rounded-md" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-lg font-bold">
        {number}
      </div>
      {true && (
        <div className="absolute bottom-0 left-0 w-full text-white text-center text-xs">место</div>
      )}
    </div>
      <div>
        <b>{boldText}</b>{defaultText}
      </div>
    </>
  );
};

export default Badge