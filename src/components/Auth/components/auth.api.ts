import { handleHttpError, handleHttpResponse, http } from '@shared/http';

const handleLogin = (email:string,password:string) => {
  return http.post('/auth/loginUrfu',{credentials:{
    email,password
    }}).then(handleHttpResponse).catch(handleHttpError)
}
const authApi = {handleLogin}
export default authApi