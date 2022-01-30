import React from 'react';
import './loadingBox.css'

function loading() {
  return (
      <div className='loadingBoxContainer'>
          <i className='fa fa-spinner fa-spin loadingIcon'></i> Loading.....
      </div>
  )
}

export default loading;
