import React from 'react'

export default class Cs extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ""
        }
        this.getInputVal = this.getInputVal.bind(this)
        this.onChangeInputVal = this.onChangeInputVal.bind(this)
    }
    componentDidMount() {
        console.log(this.props.match)
    }
    getInputVal() {
        console.log(this.inputVal.value)
    }

    /**
     * 
     * @param {function} change 改变事件
     * @param {function} change 2、这是一个不受控的组件
     */
    onChangeInputVal(event) {
        let { value } = event.target
        if (/^\s+|\s+$/.test(value)) {
            return
        }
        this.setState({ value })
        console.log(value)
    }
    render() {
        return (
            <div>
                <p className="title">我是一个标题</p>
                <p className="name">我是测试路由</p>
                <h3>2、这是一个不受控的组件</h3>
                <input type="text" ref={input => this.inputVal = input} /><button onClick={this.getInputVal}>获取值</button>
                <h3>1、这是一个受控的组件</h3>
                <input type="text" value={this.state.value} onChange={this.onChangeInputVal} />
            </div>
        )
    }
}
