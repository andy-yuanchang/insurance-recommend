import React, { useCallback, useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'

const POS_X = 0
const POS_Y = 136
const style = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0
}

const StickyHeader = (defaultSticky = false) => {
    const [isSticky, setIsSticky] = useState(defaultSticky)
    const headerRef = useRef(null)
    const toggleSticky = useCallback(
        ({ top, bottom }) => {
            if (top <= POS_X && bottom > POS_Y) {
                !isSticky && setIsSticky(true)
            } else {
                isSticky && setIsSticky(false)
            }
        },
        [isSticky]
    )
    useEffect(() => {
        const handleScroll = () => {
            toggleSticky(headerRef.current.getBoundingClientRect())
        }
        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [toggleSticky])

    return { headerRef, isSticky, style }
}

StickyHeader.propTypes = {

}

export default StickyHeader
