import { useRoutes, RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import AdminHome from '@/views/adminWords/words/AdminWord'
import AdminLayout from '@/components/layout/AdminLayout'
const Layout = lazy(() => import('@/components/layout'))
const Home = lazy(() => import('@/views/Home'))
const NotFound = lazy(() => import('@/views/NotFound'))
const CategoriesWord = lazy(() => import('@/views/words/CategoriesWord'))
const SingleWord = lazy(() => import('@/views/words/SingleWord'))
const WordsLayout = lazy(() => import('@/components/layout/WordsLayout'))
const AdminCategory = lazy(() => import('@/views/adminWords/categories/AdminCategory'))

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
          element: <WordsLayout />,
          children: [
            { index: true, element: <WordHomePage /> },
            { path: 'categories', element: <CategoriesWord /> },
            { path: 'categories/:slug', element: <SingleWord /> }
          ]
        },
        {
          path: '/admin',
          element: <AdminLayout />,
          children: [
            {
              path: 'words',
              element: <AdminHome />
            },
            {
              path: 'category',
              element: <AdminCategory />
            }
          ]
        }
      ]
    },
    { path: '*', element: <NotFound /> }
  ]
  return useRoutes(routes)
}

export default Routes
