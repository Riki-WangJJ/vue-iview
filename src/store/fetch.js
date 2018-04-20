import axios from 'axios'

const fetch = axios.create({
    method: 'post',
    baseURL: 'http://mapi.1mifd.com/'
  })

const token = location.search.match(/token=([\w-]+)/) &&
  location.search.match(/token=([\w-]+)/)[1] ||
  localStorage.getItem('token')
if (token) localStorage.setItem('token', token)

// 请求拦截器
fetch.interceptors.request.use(function (config) {
  config.headers = {
    ...config.headers,
    'Content-Type': 'application/json',
    'X-AUTH-TOKEN': token
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

fetch.all = axios.all


export default fetch