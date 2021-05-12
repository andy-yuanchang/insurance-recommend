import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

const MENU_INFO_ARRAY = ["關於我們", "電子商務自律規範", "主管機關相關連結", "網路保險服務契約", "資訊公開", "新光人壽官網APP", "服務據點"]
    

const Footer = props => {

    const getMenuItem = (text) => {
        return (
            <Fragment>
                <span className="item">{text}</span>
            </Fragment>
        )
    }

    return (
        <div id="footer">
            <div className="menu">
                {
                    MENU_INFO_ARRAY.map(name => {
                        return getMenuItem(name)
                    })
                }
            </div>
            <div className="company-info">
                <div className="title" value="0973448887">聯絡電話</div>
                <div className="title" value="中壢金爺明宮">地址</div>
            </div>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
