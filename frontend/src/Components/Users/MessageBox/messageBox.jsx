import React from 'react';
import './messageBox.css'

function message(props) {
  return (
      <div className={`alert alert-${props.variant || 'info'}`}>
          
          {props.children}
          
      </div>
  )
}

export default message;
