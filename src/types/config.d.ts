export type AppConfig = {
  app_name?: string
  app_version?: string
  language?: string
  logo?: string
  upload_max_size?: number
  upload_chunk_size?: number
  upload_simultaneous?: number
  default_archive_name?: string
  editable?: string[]
  date_format?: string
  guest_redirection?: string
  search_simultaneous?: number
  filter_entries?: string[]
  pagination: string[]
}

export type ChangeDirInput = {
  to: string
}

export type GetDirInput = {
  dir: string
}
