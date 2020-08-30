import request,{newsAPIUrl,newsAPIKey} from '../utils/request';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_GITHUB_API;
const headers = {
  'Accept': 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
  'Access-Control-Allow-Origin': true
};

export default {
  cancel : () => axios.CancelToken.source().cancel(),
  newsapi : (resource) => {
    return request.get(`${newsAPIUrl}${resource}`,{"X-Api-Key": newsAPIKey});
  },
  list: (resource) => {
    return request.get(`${resource}`);
  },
  update: (resource, attributes) => {
    return request.put(`${resource}`, { ...attributes });
  },
  insert: (resource, attributes) => {
    return request.post(`${resource}`, { ...attributes });
  },
  delete: (resource) => {
    return request.delete(`${resource}`);
  },
  insertNoToken : async (resource,attributes) => {
    const { data } = await axios.request({
      headers: headers, 
      method:'post', 
      url: `${apiUrl}/${resource}`,
      data: {...attributes},
    });
    return data;
  },
  insertCustom: (resource, attributes) => {
    return request.post(`${resource}`, attributes);
  },
};