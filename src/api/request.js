import axios from 'axios';

const request = axios.create({
  baseURL: 'http://47.96.95.59:8080',
  timeout: 500
}) 


class Request {
  // get请求
  get(path, dataParam = {}) {
    request.get(path, { params: dataParam }).then(function(response) {
        console.log(response);
        return response;
      }).catch(function(error) {
        console.log(error);
        return error;
      });
  }

  // post请求
  post(path, dataParam = {}) {
    request.post(path, dataParam).then(function(response) {
        console.log(response);
        return response;
      }).catch(function(error) {
        console.log(error);
        return error;
      });
  }
}

// 添加请求拦截器
request.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  },
);

// 添加响应拦截器
request.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  },
);

export default new Request();
