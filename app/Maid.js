import React, { Component } from 'react'
import { withCookies, Cookies } from 'react-cookie'
import './index.scss'

class Maid extends Component {

  render() {
    return (
      <div className='maid'>
        <div className='container wd600'>
          <h4>สมัครเป็นแม่บ้าน AzyService</h4>
          User <input type='text' />
          Password <input type='password' />
          <button>เข้าสู่ระบบ</button>
          <button>สมัครเป็นแม่บ้าน</button>
        </div>
      </div>
    )
  }
}

export default withCookies(Maid)