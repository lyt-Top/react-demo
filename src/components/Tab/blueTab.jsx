import React from 'react'
import { Progress } from 'antd-mobile';

export default class blueTab extends React.Component {
    render() {
        return (
            <div>
                <Progress percent={40} position="normal" unfilled={false} appearTransition />
            </div>
        )
    }
}