import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import TaskDetailsPage from './pages/TaskDetailsPage'
import { Toaster } from 'sonner'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TasksPage from './pages/TasksPage'
import HomePage from './pages/HomePage'

const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/tasks',
    element: <TasksPage />,
  },
  {
    path: '/task/:taskId',
    element: <TaskDetailsPage />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster
        toastOptions={{
          style: {
            color: '#35383e',
          },
        }}
      />
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>
)
