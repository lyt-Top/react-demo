import React from 'react'
import { List, Switch } from 'antd-mobile';

export default class greenTab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false,
            checked1: true,
        };
    }

    render() {
        return (
            <div>
                <List renderHeader={() => 'Form switch'}>
                    <List.Item extra={<Switch
                        checked={this.state.checked}
                        onChange={() => {
                        this.setState({
                            checked: !this.state.checked,
                        });
                        }}
                    />}
                    >Off</List.Item>
                    <List.Item extra={<Switch
                        checked={this.state.checked1}
                        onChange={() => {
                        this.setState({
                            checked1: !this.state.checked1,
                        });
                        }}
                    />}
                    >On</List.Item>
                </List>
            </div>
        )
    }
}