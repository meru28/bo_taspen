import axios from 'axios'
import properties from '~/properties/index'

const instance = axios.create({
  baseURL: properties.TASPEN.BASE,
  timeout: 30000
})
const date = new Date()

instance.interceptors.request.use(
  (config) => {
    console.log(
      ' request api' +
      config.url +
      'start at' +
      date.getMinutes()
    )
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    console.log(
      'response api end at' +
      date.getMinutes()
    )
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
