import request,{newsAPIUrl,newsAPIKey} from '../utils/request';
import axios from 'axios';
export default {
  cancel : () => axios.CancelToken.source().cancel(),
  newsapi : (resource) => {
    return request.get(`${newsAPIUrl}${resource}`,{Authorization : `Bearer ${newsAPIKey}`});
  },
  list: (resource) => {
    return request.get(`${resource}`);
  }
};