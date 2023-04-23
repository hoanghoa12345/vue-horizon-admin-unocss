import { useAuthStore } from '@/stores/auth'
import axios from 'axios'

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL
axios.defaults.headers.post['Content-Type'] =
  'application/x-www-form-urlencoded'
axios.interceptors.request.use(
  function (config) {
    const store = useAuthStore()
    config.headers.common['Authorization'] = 'Bearer ' + store.token
    console.log(store.token)

    return config
  },
  function (error) {
    return Promise.reject(error)
  }
)
export default axios
