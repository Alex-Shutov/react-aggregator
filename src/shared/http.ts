import axios, { AxiosError, AxiosResponse } from 'axios';
import { API_URL } from './constants';
import Cookies from "js-cookie"
import { IHTTPErrorResponse, IHTTPSuccessResponse } from '@shared/http.types';

export const http = axios.create({
  baseURL: API_URL,
  // paramsSerializer:{indexes:null}
})

interface IAuthResponse {
  user:any
}


http.interceptors.request.use(async (request) => {
  request.headers.Authorization = `Bearer ${await getToken()}`
  return request;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

http.interceptors.response.use(
  async (response) => {
    if(response.request.responseURL.includes('/auth') && response.status>=200 && response.status < 300){
      await handleSetToken(response)
    }
    return response
  },
  (err) => {
    const shouldLogout = err.response && err.response.status === 401
    if (shouldLogout) {
     //TODO redirect to auth
    }

    throw err
  },
)
const setToken = async (accessToken: string) => {
  Cookies.set('accessToken', accessToken );
}
export const getToken =  async () => {
  return Cookies.get('accessToken') || '';
}

export const removeToken = async () => {
  Cookies.remove('accessToken');
}


export const handleHttpResponse = <T = any>(response: AxiosResponse<T>):IHTTPSuccessResponse<T> => {
  return { status: 'success', body: response.data }
}

export const handleHttpError = (error: AxiosError<any>):IHTTPErrorResponse => {
  const code = error?.response?.status.toString()
  return  { status: 'error', message: error?.message, code }
  // throw new AxiosError(error?.response?.data?.message,code ?? error?.code)

}

const handleSetToken = async (response:AxiosResponse<IAuthResponse>) => {
   await setToken(response.data.user.token)
}