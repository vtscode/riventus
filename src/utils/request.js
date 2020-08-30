import axios from 'axios';
import { message } from 'antd';

export const newsAPIKey = process.env.REACT_APP_NEWSAPI_KEY;
export const newsAPIUrl = process.env.REACT_APP_NEWSAPI_URL;
export const githubAPIUrl = process.env.REACT_APP_GITHUB_API;

const handlingErrorResp = err => {
  if(err?.response) {
    message.error(err?.response?.data?.error?.substr(0,50));
  }
};

const getHeaders = {
  'Accept': 'application/vnd.api+json',
  'Content-Type': 'application/vnd.api+json',
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
  },
  post: async (url, headers, params) => {
    const option = getOption('post', url, headers, params);
    try {
      const { data } = await axios.request(option);
      return data;
    } catch (err) {
      handlingErrorResp(err);
    }
  },
  patch: async (url, headers, params) => {
    const option = getOption('patch', url, headers, params);
    try {
      const { data } = await axios.request(option);
      return data;
    } catch (err) {
      handlingErrorResp(err);
    }
  },
  put: async (url, headers, params) => {
    const option = getOption('put', url, headers, params);
    try {
      const { data } = await axios.request(option);
      return data;
    } catch (err) {
      handlingErrorResp(err);
    }
  },
  delete: async (url, headers, params) => {
    const option = getOption('delete', url, headers, params);
    try {
      const { data } = await axios.request(option);
      return data;
    } catch (err) {
      handlingErrorResp(err);
    }
  }
};

export default app;