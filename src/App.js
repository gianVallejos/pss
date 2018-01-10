import React, {Component} from 'react'
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

import Dashboard from './pages/dashboard/containers/dashboard'
import Login from './pages/login/containers/login'
import Register from './pages/register/containers/register'
import ForgotPass from './pages/recuperar-pass/containers/recuperar-pass'

class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div>

        <Route exact path='/' component={Login} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/forgotPass' component={ForgotPass} />

      </div>
      </BrowserRouter>
    )
  }
}

export default App
