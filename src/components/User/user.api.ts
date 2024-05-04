import { handleHttpError, handleHttpResponse, http } from '@shared/http';

const getCurrentUser = (): Promise<any> => {
  return http.get('/api/me').then(handleHttpResponse).catch(handleHttpError)
  // return new Promise(resolve => {
  // })
}

const userApi = { getCurrentUser }
export default userApi