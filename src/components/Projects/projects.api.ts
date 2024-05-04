import { handleHttpError, handleHttpResponse, http } from '@shared/http';

const getAllProject = () => {
  return http.get('/api/projects').then(handleHttpResponse).catch(handleHttpError)
}

const projectApi = {getAllProject  }
export default projectApi