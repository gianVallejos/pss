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

        <Route exact path='/pss/' component={Login} />
        <Route exact path='/pss/login' component={Login} />
        <Route exact path='/pss/dashboard' component={Dashboard} />
        <Route exact path='/pss/register' component={Register} />
        <Route exact path='/pss/forgotPass' component={ForgotPass} />

      </div>
      </BrowserRouter>
    )
  }
}

export default App
