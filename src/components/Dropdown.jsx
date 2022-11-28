import React from 'react'
import { useState } from 'react'

const Dropdown = (props) => {
    const {dropDownText, dropDownOptions} = props;
    const [display, setDisplay] = useState('none');

    function handleClick() {
        display==='none'? setDisplay('block'): setDisplay('none');
    }

  return (
    <div>
        <div onClick={handleClick}>
            {dropDownText}
        </div>
        <div style={{display: display}}>
            {props.children}
        </div>
    </div>
  )
}

export default Dropdown