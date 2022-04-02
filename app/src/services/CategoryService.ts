import useFetch from '@/hooks/useFetch'
import { Category, UseProps } from '@/interfaces'

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
  } = useFetch('http://familiapp.np11.com/games/words/categories')

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
  } = useFetch('http://familiapp.np11.com/games/words/categories/save')

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
