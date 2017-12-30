import Axios from 'axios'

const instance = Axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com'
})

instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN from instance'


instance.interceptors.request.use(requestConfig => {
  console.log(requestConfig)
  
  //Edit requestConfig
  
  return requestConfig
}, error => {
  console.log(error)
  return Promise.reject(error)
})

instance.interceptors.response.use(requestConfig => {
  console.log(requestConfig)
  
  //Edit requestConfig
  
  return requestConfig
}, error => {
  console.log(error)
  return Promise.reject(error)
})

export default instance