import { Word } from '@/interfaces'
import { useState, useEffect } from 'react'
import CardWord from './components/CardWord'
import { useGetWordsByCategorySlug } from '@/services/WordService'
import { useParams, Link } from 'react-router-dom'
import { Button, Container } from '@mui/material'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import CloseIcon from '@mui/icons-material/Close'

const style = {
  root: {},
  btnClose: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 1,
    fontSize: '6rem',
    color: 'red',
    '&:hover': {
      transition: 'all 0.3s ease-in-out',
      color: 'black'
    }
  },
  btnPlay: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    zIndex: 1,
    color: 'green',
    '&:hover': {
      transition: 'all 0.3s ease-in-out',
      color: 'black'
    },
    icon: {
      fontSize: '6rem'
    }
  }
}

export default function SingleWord() {
  const [word, setWord] = useState<Word>({} as Word)
  const { slug = '' } = useParams()
  const { data = [], getWords, isPending } = useGetWordsByCategorySlug(slug)

  useEffect(() => {
    getWords()
    getRandomWord()
  }, [])

  function nextWord() {
    getRandomWord()
  }

  function getRandomWord() {
    if (data) {
      const newWord = data[Math.floor(Math.random() * data.length)]
      setWord(newWord)
    }
  }

  if (isPending) {
    return <div>Cargando...</div>
  }

  return (
    <>
      <Container maxWidth="sm">{!word.id && <h1>Preparate para comenzar</h1>}</Container>
      <Container maxWidth="sm">{word.id && <CardWord word={word} />}</Container>
      <Link to={`/words/categories`}>
        <CloseIcon sx={style.btnClose} />
      </Link>
      <Button onClick={nextWord} sx={style.btnPlay}>
        <PlayArrowIcon sx={style.btnPlay.icon} />
      </Button>
    </>
  )
}
