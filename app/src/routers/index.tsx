import { useRoutes, RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import AdminHome from '@/views/adminWords/AdminHome'
import AdminLayout from '@/components/layout/AdminLayout'
const Layout = lazy(() => import('@/components/layout'))
const Home = lazy(() => import('@/views/Home'))
const NotFound = lazy(() => import('@/views/NotFound'))
const CategoriesWord = lazy(() => import('@/views/words/CategoriesWord'))
const SingleWord = lazy(() => import('@/views/words/SingleWord'))

const WordHomePage = lazy(() => import('@/views/words/WordHomePage'))

const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <Home /> },
        {
          path: '/words',
          children: [
            { index: true, element: <WordHomePage /> },
            { path: '/words/categories', element: <CategoriesWord /> },
            { path: '/words/categories/:slug', element: <SingleWord /> },
            {
              path: '/words/admin',
              element: <AdminLayout />,
              children: [{ index: true, element: <AdminHome /> }]
            }
          ]
        }
      ]
    },
    { path: '/', element: <NotFound /> }
  ]
  return useRoutes(routes)
}

export default Routes
