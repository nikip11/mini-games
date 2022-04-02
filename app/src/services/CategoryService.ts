import useFetch from '@/hooks/useFetch'
import { Category, UseProps } from '@/interfaces'

const API_URL = import.meta.env.VITE_APP_API_URL

interface GetProps extends UseProps {
  data: Category[] | null
  getCategories: () => Promise<void>
}

export function useGetCategories(): GetProps {
  const {
    data = null,
    error,
    isPending,
    executeFetch
  } = useFetch(`${API_URL}games/words/categories`)

  const getCategories = async () =>
    await executeFetch({
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return { data, error, isPending, getCategories }
}

interface SaveProps extends UseProps {
  data: Category | null
  saveCategory: (category: Category) => Promise<void>
}

export function useSaveCategory(): SaveProps {
  const {
    data = null,
    error,
    isPending,
    executeFetch
  } = useFetch(`${API_URL}games/words/categories/save`)

  const saveCategory = async (category: Category) =>
    await executeFetch({
      method: 'POST',
      body: JSON.stringify(category),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return { data, error, isPending, saveCategory }
}
