import React from 'react'
import { NoticeBar, WhiteSpace, Toast } from 'antd-mobile';
import { NavLink } from 'react-router-dom'

export default class CS extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            visible: false
        }
    }
    componentWillMount() {
        Toast.loading('Loading...', 2, () => {
            this.setState({
                visible: true
            })
        });
    }

    render() {
        return (
            <div style={{ position: 'relative', zIndex: 9999 }}>
                <div className={this.state.visible ? 'show' : 'hidden'}>
                    <WhiteSpace size="lg" />
                    <NoticeBar marqueeProps={{ loop: true, style: { padding: '0 7.5px' } }}>
                        Notice: The arrival time of incomes and transfers of Yu &#39;E Bao will be delayed during National Day.
                        </NoticeBar>
                    <WhiteSpace size="lg" />
                    <NavLink to="/subpage" exact>subpage jump</NavLink>
                </div>
            </div>
        )
    }
}