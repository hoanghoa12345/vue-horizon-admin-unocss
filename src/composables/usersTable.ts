import { getAllUser } from '@/services/requests/users'
import { UserResponse } from '@/types/user'

export const useUsersTable = () => {
  const data = ref<UserResponse | null>(null)
  const error = ref(null)
  const loading = ref(true)

  function execute(page: number) {
    getAllUser(page)
      .then((response) => {
        data.value = response.data
        loading.value = false
      })
      .catch((err) => {
        error.value = err.message
        loading.value = false
      })
  }

  execute(1)
  return { data, error, loading, execute }
}
