type UserResponse = {
  users: UserPaginate
  status: string
}

type UserPaginate = {
  current_page: number
  data: User[]
  first_page_url: string
  from: number
  next_page_url: any
  path: string
  per_page: number
  prev_page_url: any
  to: number
}

type User = {
  id: number
  name: string
  email: string
  email_verified_at: any
  created_at: string
  updated_at: string
}

export { UserResponse, UserPaginate, User }
