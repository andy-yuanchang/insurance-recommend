import React from 'react'
import PropTypes from 'prop-types'

const Button = props => {

    const { text, className, onClick } = props
    
    const handleClick = e => {
        onClick && onClick()
    }

    return (
        <div id="button" className={className || ""} onClick={handleClick}>
            {text || ""}
        </div>
    )
}

Button.propTypes = {
    text: PropTypes.string,
    className: PropTypes.string,
    onClick: PropTypes.func
}

export default Button
