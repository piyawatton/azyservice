import React, { Component } from 'react'
import { withCookies, Cookies } from 'react-cookie'
import Login from './containers/Login'
import Register from './containers/Register'
import './index.scss'

class Maid extends Component {

  render() {
    return (
      <div className='maid'>
        {/* <Login /> */}
        <Register />
      </div>
    )
  }
}

export default withCookies(Maid)