export interface Category {
  id?: number
  title: string
  image?: string
  slug?: string
}

export interface Word {
  id?: number
  name: string
  image?: string
  category?: Category | null
}

export type UseProps = {
  error: string | null
  isPending: boolean
}
