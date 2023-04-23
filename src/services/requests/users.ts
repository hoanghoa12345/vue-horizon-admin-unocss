import axios from '../apiClient'
const prefix = '/api/v1/users'
function getAllUser(page = 1) {
  return axios.get(prefix + '?page=' + page)
}

export { getAllUser }
