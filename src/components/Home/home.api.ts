import { handleHttpError, handleHttpResponse, http } from '@shared/http';

const getAllEvents = () => {
  return http.get('/api/filters/events').then(handleHttpResponse).catch(handleHttpError)
}

const getCurrentEvent = () => {
  return http.get('/api/filters/events?current').then(handleHttpResponse).catch(handleHttpError)
}

const getAllCategories = ()=>{
  return http.get('/api/categories').then(handleHttpResponse).catch(handleHttpError)
}

const homeApi = { getAllEvents,getCurrentEvent,getAllCategories }
export default homeApi