import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Row, Col } from 'react-bootstrap'
import { Input, Form, Button } from 'muicss/react'
import { UploadButton } from '../../components'
import './index.scss'

class Register extends Component {

  state = {
    file: ''
  }

  renderUserName() {
    return (
      <Row>
        <Col xs={10} md={10}>
          <Input label={'ชื่อ'} type={'email'} floatingLabel={true} />
        </Col>
      </Row>
    )
  }

  renderSurName() {
    return (
      <Row>
        <Col xs={10} md={10}>
          <Input label={'นามสกุล'} floatingLabel={true} />
        </Col>
      </Row>
    )
  }

  renderMaidExperience() {
    return (
      <Row>
        <Col xs={10} md={10}>
          <Input label={'ประสบการณ์เป็นแม่บ้าน'} floatingLabel={true} />
        </Col>
      </Row>
    )
  }

  renderPhoneNumber() {
    return (
      <Row>
        <Col xs={10} md={10}>
          <Input label={'เบอร์โทร'} floatingLabel={true} />
        </Col>
      </Row>
    )
  }

  renderLineId() {
    return (
      <Row>
        <Col xs={10} md={10}>
          <Input label={'Line ของท่าน(จำเป็น)'} required floatingLabel={true} />
        </Col>
      </Row>
    )
  }

  render() {
    return (
      <div className='register'>
        <div className='container'>
          <h4>สมัครเป็นแม่บ้าน Azy</h4>
          {this.renderUserName()}
          {this.renderSurName()}
          {this.renderMaidExperience()}
          {this.renderPhoneNumber()}
          {this.renderLineId()}
          <UploadButton value={this.state.file} onUpload={(pathFile) => {
            this.setState({ file: pathFile })
          }} />
          <Button>Submit</Button>
          {/* User <input type='text' />
          Password <input type='password' />
          <button>เข้าสู่ระบบ</button>
          <button>สมัครเป็นแม่บ้าน</button> */}
        </div>
      </div>
    )

  }
}

export default Register