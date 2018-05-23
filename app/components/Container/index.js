import React, { Component } from 'react'
import './index.scss'

const Container = ({ ...prop }) => (
  <div className='phaitonious-container'>
    {props.child}
  </div>
)

export default Container
