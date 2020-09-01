import React from 'react'
import './Buttons.css'

export default props => {
    let classes = 'button '
        classes += props.operation ? 'operation' : ''
        classes += props.double ? 'double' : ''
        classes += props.triple ? 'triple' : ''
        classes += props.ac ? 'ac' : ''
        classes += props.zero ? 'zero' : ''
    return (
        <button 
            onClick={e => props.click(e.target.innerHTML)}
            className={classes}
        >
        {props.label}
        </button>
    )
}
