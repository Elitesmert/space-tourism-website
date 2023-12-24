import App from '@/App'
import Home from '@/pages/Home'
import Moons from '@/pages/Moons'
import NotFound from '@/pages/NotFound'
import { createBrowserRouter } from 'react-router-dom'

const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'moons',
        element: <Moons />,
      },
    ],
  },
])

export default routes
