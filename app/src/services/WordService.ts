import useFetch from '@/hooks/useFetch'
import { Word, UseProps } from '@/interfaces'

interface GetProps extends UseProps {
  data: Word[] | null
  getWords: () => Promise<void>
}

export function useGetWords(): GetProps {
  const { data, error, isPending, executeFetch } = useFetch('http://familiapp.np11.com/games/words')

  const getWords = async () =>
    await executeFetch({
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return { data, error, isPending, getWords }
}

export function useGetWordsByCategorySlug(slug: string): GetProps {
  const { data, error, isPending, executeFetch } = useFetch(
    `http://familiapp.np11.com/games/words/category/${slug}`
  )

  const getWords = async () =>
    await executeFetch({
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return { data, error, isPending, getWords }
}

interface SaveProps extends UseProps {
  data: Word | null
  saveWord: (word: Word) => Promise<void>
}

export function useSaveWord(): SaveProps {
  const { data, error, isPending, executeFetch } = useFetch(
    'http://familiapp.np11.com/games/words/save'
  )

  const saveWord = async (word: Word) =>
    await executeFetch({
      method: 'POST',
      body: JSON.stringify(word),
      headers: {
        'Content-Type': 'application/json'
      }
    })

  return { data, error, isPending, saveWord }
}
