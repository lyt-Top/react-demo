import React from 'react'
import { NavBar, Icon } from 'antd-mobile';
import { withRouter } from 'react-router-dom'

class Subpage extends React.Component {
    render() {
        return (
            <div style={{ position: 'relative', zIndex: 9999 }}>
                <NavBar
                    mode="dark"
                    icon={<Icon type="left" />}
                    onLeftClick={() => this.props.history.go(-1)}
                    rightContent={[
                        <Icon key="0" type="search" style={{ marginRight: '16px' }} />,
                        <Icon key="1" type="ellipsis" />,
                    ]}
                >NavBar</NavBar>
            </div>
        )
    }
}

export default withRouter(Subpage)