import { buttonVariants } from '@/components/ui/button'
import { NavLink } from 'react-router-dom'

export const NoMatch = () => {
  return (
    <div className="flex items-center justify-center flex-grow bg-background text-foreground">
      <div className="space-y-4">
        <h2 className="mb-4 text-8xl">404</h2>
        <h1 className="text-3xl font-semibold">Oops! Page not found</h1>
        <p className="text-sm text-muted-foreground">
          We are sorry, but the page you requested was not found
        </p>
        <NavLink to="/" className={buttonVariants()}>
          Back to Home
        </NavLink>
      </div>
    </div>
  )
}
