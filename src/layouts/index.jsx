import { HomepageLayout } from './HomepageLayout' 
import { HomepageRoutes } from '@/routes' 
import { SignUpLayout } from './SignUpLayout';
import { SignUpRoutes } from '@/routes/SignUpRoutes' 


export const Layouts = () => {
  return (
    <SignUpLayout>
      <SignUpRoutes />
    </SignUpLayout>
  )
  return (
    <HomepageLayout>
      <HomepageRoutes />
    </HomepageLayout>
  )
};

