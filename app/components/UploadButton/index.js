import React, { Component } from 'react'
import './index.scss'

const UploadButton = (props) => {
  return (
    <div className="upload-btn-wrapper">
      <button className="phaitonious-btn">
        {
          props.value == '' ?
            'Upload a file'
            : props.value.split(/(\\|\/)/g).pop()
        }
      </button>
      <input
        id='input-file'
        type="file"
        name="myfile"
        onChange={(e) => {
          props.onUpload(e.target.value)
        }
        } />
    </div>
  )
}

export default UploadButton
