import React, { useState, Component, Suspense } from 'react'

import { HashRouter, Route, Routes } from 'react-router-dom'
import './assest/css/style.css'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Containers
 //const DefaultLayout = React.lazy(() => import('./layout/DefaultLayout'))

// Pages
//const Login = React.lazy(() => import('./views/login/Login'))

import  AppLayout  from './layout/AppLayout';

import  SimpleLoginPage  from './components/Login/Login';

// const Register = React.lazy(() => import('./views/pages/register/Register'))
// const Page404 = React.lazy(() => import('./views/pages/page404/Page404'))
// const Page500 = React.lazy(() => import('./views/pages/page500/Page500'))

class App extends Component {
  render() {
    return (
      <HashRouter>
        <Suspense fallback={loading}>
          <Routes>
            <Route exact path="/login" name="Login Page" element={<SimpleLoginPage />} />
            <Route path="*" name="Home" element={<AppLayout />} />
          </Routes>
        </Suspense>
      </HashRouter>
    )
  }
}


export default App