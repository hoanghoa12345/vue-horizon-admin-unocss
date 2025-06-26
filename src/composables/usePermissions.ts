export const usePermissions = () => {
  const appStore = useAppStore()
  const user = appStore.user

  const is = (role: string): boolean => {
    return user.role === role
  }

  const can = (permission: string): boolean => {
    return appStore.hasPermission(permission)
  }

  return {
    is,
    can,
  }
}
