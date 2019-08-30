import React from 'react'
import { TabBar } from 'antd-mobile';
import { withRouter } from 'react-router-dom'
import NProgress from 'nprogress'

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: this.props.history.location.pathname,
            hidden: false
        };
        this.nProgress = this.nProgress.bind(this)
    }

    componentWillMount() {
        this.nProgress(100)
    }

    componentWillUpdate() {
        this.nProgress(100)
    }

    nProgress(time) {
        NProgress.start()
        setTimeout(() => { NProgress.done() }, time)
    }

    render() {
        return (
            <div>
                <div style={{ position: 'fixed', height: '100%', width: '100%', top: 0 }}>
                    <TabBar
                        unselectedTintColor="#949494"
                        tintColor="#33A3F4"
                        barTintColor="white"
                        tabBarPosition="bottom"
                        hidden={this.props.history.location.pathname === '/' || this.props.history.location.pathname === '/subpage' ? true : false}
                    >
                        <TabBar.Item
                            title="Life"
                            key="Life"
                            icon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selectedIcon={<div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat'
                            }}
                            />
                            }
                            selected={this.state.selectedTab === '/blueTab'}
                            badge={1}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/blueTab',
                                });
                                this.props.history.push('/blueTab')
                            }}
                            data-seed="logId"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="Koubei"
                            key="Koubei"
                            badge={'new'}
                            selected={this.state.selectedTab === '/redTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/redTab',
                                });
                                this.props.history.push('/redTab')
                            }}
                            data-seed="logId1"
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            selectedIcon={
                                <div style={{
                                    width: '22px',
                                    height: '22px',
                                    background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat'
                                }}
                                />
                            }
                            title="Friend"
                            key="Friend"
                            dot
                            selected={this.state.selectedTab === '/greenTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/greenTab',
                                });
                                this.props.history.push('/greenTab')
                            }}
                        >
                        </TabBar.Item>
                        <TabBar.Item
                            icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                            selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                            title="My"
                            key="my"
                            selected={this.state.selectedTab === '/yellowTab'}
                            onPress={() => {
                                this.setState({
                                    selectedTab: '/yellowTab',
                                });
                                this.props.history.push('/yellowTab')
                            }}
                        >
                        </TabBar.Item>
                    </TabBar>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar)