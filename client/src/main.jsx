import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'

import Root from './routes/root'
import Register from './routes/register'
import Login from './routes/login'
import Search from './routes/search'
import MovieDetails from './components/movieDetails'

const identifiedRouter = createBrowserRouter([
  { path: '/', element: <Root /> },
  {
    path: '/search',
    element: <Search />,
  },
  {
    path: '/details/:tmdbId',
    element: <MovieDetails />,
  },
])

const unidentifiedRouter = createBrowserRouter([
  { path: '/', element: <Root /> },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/login',
    element: <Login />,
  },
])

const router = sessionStorage.getItem('session')
  ? identifiedRouter
  : unidentifiedRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
)
