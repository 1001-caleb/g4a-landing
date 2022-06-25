import React from 'react'
import {Burguer} from './styleds/Burguer.styled'

function BurguerButton(props) {
  return (
    <Burguer>
      <div onClick={props.handleClick}
        className={`icon nav-icon-5 ${props.clicked ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Burguer>
  )
}

export default BurguerButton

