import React from 'react'
import { Switch, Route } from 'react-router-dom'

// import { Dashboard } from '../pages/Dashboard'
// import { Repository } from '../pages/Repository'

const Dashboard = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "dashboardPage" */
      '../pages/Dashboard'
    )
)
const Repository = React.lazy(
  () =>
    import(
      /* webpackPrefetch: true */
      /* webpackChunkName: "repositoryPage" */
      '../pages/Repository'
    )
)

export const Routes: React.FC = () => {
  return (
    <React.Suspense fallback={'Loading'}>
      <Switch>
        <Route component={Dashboard} path="/" exact />
        <Route component={Repository} path="/repositories/:repository+" />
      </Switch>
    </React.Suspense>
  )
}
