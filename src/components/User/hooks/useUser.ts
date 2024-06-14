import { useEffect, useMemo } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import { usersRatesSelector } from '@components/User/user.selector';
import { authedAtom } from '@components/User/user.atom';
import { IUser } from '@components/User/user.types';

const UseUsers = () => {
  // const [_, setUser] = useRecoilState(authedAtom);
  const [user,setuser] = useRecoilState(authedAtom)
  console.log(user,'useUser');
  const handleChangeUser = (key:string,value:any) =>{
    if(user.loadedUser && key in user.loadedUser){
      // @ts-ignore
      setuser((prev)=>({...prev,loadedUser:{...prev.loadedUser,[key]:value}}))
    }
  }



  return { user:user.loadedUser,changeUser:handleChangeUser,setUser:(loadedUser:IUser)=>setuser({loadedUser:loadedUser,authStage:'logged',isLoading:false}) };
};

export default UseUsers;