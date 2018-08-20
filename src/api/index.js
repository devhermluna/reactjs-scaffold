import axios from 'axios'

let instance = axios.create({
  baseURL: `http://jsonplaceholder.typicode.com/`
})

instance.interceptors.request.use(config => {
  const _token = localStorage.getItem('site-token')
  if (_token) config.headers.Authorization = `Bearer ${_token}`
  return config
}, error => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  return response.data
}, error => {
  return error.response
})

export default instance