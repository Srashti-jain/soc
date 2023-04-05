import React from 'react'

const Dashboard = React.lazy(() => import('./components/Dashboard/Dashboard'))
const Dashboard2 = React.lazy(() => import('./components/Dashboard/Dashboard2'))
const Events = React.lazy(() => import('./components/Dashboard/Events'))


const SingleSelect = React.lazy(() => import('./components/SingleSelect/SingleSelect'))

//const Classcom = React.lazy(() => import('./components/classcom/ExpenseEntryItem'))
// const PropsParents = React.lazy(() => import('./components/props/PropsParents'))
// const EventsParents = React.lazy(() => import('./components/events/EventsParents'))
// const Clock = React.lazy(() => import('./components/stateful/Clock'))
// const StateListParents = React.lazy(() => import('./components/stateful/StateListParents'))
// const StateUsingHookListParents = React.lazy(() => import('./components/stateful/StateUsingHookListParents'))
// const ContainmentParents = React.lazy(() => import('./components/containment/ContainmentParents'))
// const PagerParents = React.lazy(() => import('./components/pager/PagerParents'))
// const FormParents = React.lazy(() => import('./components/controlledcom/FormParents'))
// const FormikParents = React.lazy(() => import('./components/formik/FormikParents'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/singleselect', name: 'SingleSelect', element: SingleSelect },
  { path: '/Dashboard2',name: 'Dashboard2', element: Dashboard2},
  { path: '/events',name: 'Events', element: Events},

  
]

export default routes
