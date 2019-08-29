import React from 'react'
import { Button, WhiteSpace } from 'antd-mobile';

export default class redTab extends React.Component {
    render() {
        return (
            <div style={{ padding: "15px" }}>
                <Button type="primary">primary</Button><WhiteSpace />
                <Button type="primary" disabled>primary disabled</Button><WhiteSpace />
                <Button loading>loading button</Button><WhiteSpace />
            </div>
        )
    }
}