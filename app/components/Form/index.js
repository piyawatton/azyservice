import React, { Component } from 'react'
import './index.scss'

const Form = (props) => {
  return <div className='phaitonious-form'>
    <h3 className='form-title'>{props.title}</h3>
    {props.children}
  </div>
}

export default Form
