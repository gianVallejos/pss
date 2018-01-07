import React from 'react'
import ReactDOM from 'react-dom'

import Login from './pages/login/containers/login'
import Register from './pages/register/containers/register'
import ForgotPassword from './pages/recuperar-pass/containers/recuperar-pass'

import Dashboard from './pages/dashboard/containers/dashboard'

import {BrowserRouter, Route } from 'react-router-dom'
import { Switch } from 'react-router'
import './index.css'

const $app = document.getElementById('home')
ReactDOM.render(
              <BrowserRouter>
                  <Switch>
                    <Route path="/" exact component={Dashboard} />
                    <Route path="/login" exact component={Login} />
                    <Route path="/register" exact component={Register} />
                    <Route path="/forgot" exact component={ForgotPassword} />
                  </Switch>
              </BrowserRouter>
, $app)
