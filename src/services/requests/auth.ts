import { LoginInput } from '@/types/auth'
import axios from '../apiClient'

const loginRequest = (data: LoginInput) => {
  return axios.post('/api/v1/login', data)
}

const logoutRequest = () => {
  return axios.get('/api/v1/logout')
}

const profileRequest = () => {
  return axios.get('/api/v1/user-profile')
}

export { loginRequest, logoutRequest, profileRequest }
