import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Button } from 'react-bootstrap'
import { Form } from '../../components'
import './index.scss'

class Login extends Component {

  render() {
    return (
      <div className='login'>
        <div className='container wd600'>
          <h4>เข้าสู่ระบบ AzyService</h4>
          User <input type='text' />
          Password <input type='password' />
          <button>เข้าสู่ระบบ</button>
          <button>สมัครเป็นแม่บ้าน</button>
        </div>
      </div>
    )

  }
}

export default Login