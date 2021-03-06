import axios from 'axios';
import { message } from 'antd';

export const newsAPIKey = process.env.REACT_APP_NEWSAPI_KEY ?? 'c046efa0f0fd453ab01aaf7a3c44676e';
export const newsAPIUrl = process.env.REACT_APP_NEWSAPI_URL ?? 'https://newsapi.org/v2/';
export const githubAPIUrl = process.env.REACT_APP_GITHUB_API;

const handlingErrorResp = err => {
  if(err?.response) {
    message.error(err?.response?.data?.error?.substr(0,50));
  }
};

const getHeaders = {
  'Access-Control-Allow-Origin': true,
};

const getOption = (method, url, headers, data) => {
  return { headers: headers ? headers : getHeaders, method, url, data };
};

const app = {
  get: async (url,headers) => {
    const option = getOption('get', url,headers);
    try {
      const { data } = await axios.request(option);
      return data;
    } catch (err) {
      handlingErrorResp(err);
    }
  }
};

export default app;