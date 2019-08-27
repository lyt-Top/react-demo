import React from 'react'

export default class Cs extends React.Component {
    componentDidMount() {
        console.log(this.props.match)
    }
    render() {
        return (
            <div>
                <p className="title">我是一个标题</p>
                <p className="name">我是测试路由</p>
            </div>
        )
    }
}