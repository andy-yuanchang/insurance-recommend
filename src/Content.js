import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Content = props => {
    return (
        <div id="content">
            <div className="header">
                <Button
                    text="重點提問Ｑ＆Ａ"
                    className="rounded"
                />
                <Button
                    text="秒讀影片懶人包"
                    className="rounded"
                />
                <Button
                    text="保單內容及條款樣本"
                    className="rounded"
                />
                <Button
                    text="繳費管道"
                    className="rounded"
                />
                <Button
                    text="立即投保"
                    className="sharpen red"
                />
                <Button
                    text="試算保費"
                    className="sharpen grey"
                />
            </div>
            <div className="example">
                <div className="title">範例說明</div>
                <div className="divider" />
                <div className="detail">
                    艾平安先生為30歲男性，於新光人壽網路投保專區投保「新光人壽 i 平安傷害保險」保險金額100萬元，保費750元(假設職業類別第1類)，其艾先生所擁有的保障如下：
                    <table>
                        <thead>
                            <tr>
                                <th>給付項目</th>
                                <th>保險給付金額 (單位：新臺幣元)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>意外身故保險金或喪葬費用保險金</td>
                                <td>100萬元</td>
                            </tr>
                            <tr>
                                <td>意外失能保險金保險金額× 1~11 級失能給付比例(5%~100%)</td>
                                <td>5萬 (=100萬x5%) ~100萬元(=100萬x100%)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

Content.propTypes = {

}

export default Content
