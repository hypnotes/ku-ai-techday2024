import { Navigate, type RouteObject } from 'react-router'
import ApplyPage from '@pages/ApplyPage'
import HomePage from '@pages/HomePage'
import KeynotePage from '@pages/KeynotePage'
import LocationPage from '@pages/LocationPage'
import OrganizerPage from '@pages/OrganizerPage'
import Page404 from '@pages/Page404'
import ProgramPage from '@pages/ProgramPage'

const routes: RouteObject[] = [
  {
    path: '',
    element: <HomePage />
  },
  {
    path: 'organizer',
    element: <OrganizerPage />
  },
  {
    path: 'apply',
    element: <ApplyPage />
  },
  {
    path: 'location',
    element: <LocationPage />
  },
  {
    path: 'program',
    element: <ProgramPage />
  },
  {
    path: 'status',
    children: [
      {
        path: '404',
        element: <Page404 />
      }
    ]
  },
  {
    path: '*',
    element: <Navigate to="/status/404" replace />
  }
]

export default routes
