import { Suspense } from 'react'
import Routes from '@/routers'
import { BrowserRouter } from 'react-router-dom'
import Loading from '@/components/ui/Loading'

export default function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </>
  )
}
