import React from 'react'

export default class Cs extends React.Component { 
    componentDidMount() { 
        console.log(this.props.match)
    }
    render() { 
        return (
            <div>我是测试路由</div>
        )
    }
}