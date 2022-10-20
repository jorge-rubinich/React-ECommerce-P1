import React from 'react'

const Boton = (props) => {
  return (
    <button id={props.botCaption} type="button" onClick={props.action}>{props.botCaption}</button>
  )
}

export default Boton

