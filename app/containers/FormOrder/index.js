import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col, Button } from 'react-bootstrap'
import { Form } from '../../components'
import './index.scss'

class FormOrder extends Component {

  getWorkType() {
    return (
      <Row>
        <Col xs={5} md={5} >
          ประเภทงาน :
      </Col>
        <Col xs={7} md={7}>
          <select>
            <option value="ทำความสะอาดทั่วไป">ทำความสะอาดทั่วไป</option>
            <option value="ทำความสะอาดเร่งด่วน">ทำความสะอาดเร่งด่วน</option>
          </select>
        </Col>
      </Row>)
  }

  getExpectedIncome() {
    return (
      <Row>
        <Col xs={5} md={5} >
          เงินที่คาดหวัง
        </Col>
        <Col xs={7} md={7}>
          <input className='wd100' type='number' /> - <input className='wd100' type='number' />
        </Col>
      </Row>
    )
  }

  getWorkTime() {
    return (
      <Row>
        <Col xs={5} md={5} >
          เวลาที่รับบริการ
      </Col>
        <Col xs={7} md={7}>
          <input type='date' />
          <form>
            <input type="radio" name='period' /> ช่วงเช้า 9:00-13:00
        <input type="radio" name='period' /> ช่วงบ่าย 13:00-18:00
      </form>
        </Col>
      </Row>
    )
  }

  getOtherComment() {
    return (
      <Row>
        <Col xs={5} md={5} >
          รายละเอียดเพิ่มเติม
          </Col>
        <Col xs={7} md={7}>
          <textarea rows={3}></textarea>
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <div className='form-order container' >
        <Form title={'รายละเอียดการจ้างงาน'}>
          {this.getWorkType()}
          {this.getExpectedIncome()}
          {this.getWorkTime()}
          {this.getOtherComment()}
        </Form>
      </div >
    )
  }

}

export default FormOrder