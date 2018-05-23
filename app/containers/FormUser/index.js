import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Button } from 'react-bootstrap'
import { Form } from '../../components'
import './index.scss'

class FormUser extends Component {

  getUserName() {
    return (
      <Row>
        <Col xs={5} md={5} >
          ชื่อ :
        </Col>
        <Col xs={7} md={7}>
          <select>
            <option value="ทำความสะอาดทั่วไป">ทำความสะอาดทั่วไป</option>
            <option value="ทำความสะอาดเร่งด่วน">ทำความสะอาดเร่งด่วน</option>
          </select>
        </Col>
      </Row>
    )
  }

  getPhoenNumber() {
    return (
      <Row>
        <Col xs={5} md={5} >
          เบอร์โทร
        </Col>
        <Col xs={7} md={7}>
          <input type='number' />
        </Col>
      </Row>
    )
  }

  getAddress() {
    return (
      <Row>
        <Col xs={5} md={5} >
          ที่อยู่
          </Col>
        <Col xs={7} md={7}>
          <textarea rows={3}></textarea>
        </Col>
      </Row>
    )
  }

  getSize() {
    return (
      <Row>
        <Col xs={5} md={5} >
          ขนาดบ้าน
        </Col>
        <Col xs={7} md={7}>
          <select>
            <option value="25-50Sq.M">25-50Sq.M</option>
            <option value="25-50Sq.M">25-50Sq.M</option>
          </select>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <div className='form-order container' >
        <Form title={'รายละเอียดผู้จ้างงาน'}>
          {this.getUserName()}
          {this.getPhoenNumber()}
          {this.getAddress()}
          {this.getSize()}
        </Form>
      </div >
    )
  }

}

export default FormUser