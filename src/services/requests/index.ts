import type { LoginInput } from '~/types/auth'
import axios from '../apiClient'
import type { AppConfig, ChangeDirInput } from '~/types/config'
import type { User } from '~/types/user'

const getConfig = () => {
  return new Promise<AppConfig>((resolve, reject) => {
    axios
      .get('getconfig')
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err))
  })
}

const getUser = () => {
  return new Promise<User>((resolve, reject) => {
    axios
      .get('getuser')
      .then((response) => {
        const { data, headers } = response
        axios.defaults.headers.common['x-csrf-token'] = headers['x-csrf-token']
        resolve(data.data)
      })
      .catch((err) => reject(err))
  })
}

const login = (params: LoginInput) => {
  return new Promise<User>((resolve, reject) => {
    axios
      .post('login', params)
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err))
  })
}

const logout = () => {
  return new Promise((resolve, reject) =>
    axios
      .post('logout')
      .then((res) => resolve(res.data.data))
      .catch((err) => reject(err))
  )
}

const changeDir = (params: ChangeDirInput) => {
  return new Promise((resolve, reject) =>
    axios
      .post('changedir', params)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  )
}

const getDir = (params: ChangeDirInput) => {
  return new Promise((resolve, reject) =>
    axios
      .post('getdir', params)
      .then((res) => resolve(res.data))
      .catch((err) => reject(err))
  )
}

export { getConfig, getUser, login, logout, changeDir, getDir }
