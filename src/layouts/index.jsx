import { HomepageLayout } from './HomepageLayout'
import { HomepageRoutes } from '@/routes'

export const Layouts = ({ children }) => {
  return (
    <HomepageLayout>
      <HomepageRoutes />
    </HomepageLayout>
  )
}
