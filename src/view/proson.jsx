import React, { Suspense } from 'react';
import Init from '../components/init'
import TestOne from './demo/test1'
import TestTwo from './demo/test2'
// import TestFour from './demo/test4'
const TestFour = React.lazy(() => import('./demo/test4'))

function Test(props) {
    return (
        <div className="testWarp">
            我调用了 `Proson` {props.value}
            <Proson name="11111" />
        </div>
    )
}

// 1. 这是
class Proson extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userMessage: 'my name is ... init.jsx',
            isClick: false
        }
    }

    /**
     * 子组件调用父组件(及子向父传值)，与 vue 中一样，只是执行父组件的方法不一样
     * vue: this.$emit("这里是父组件的方法事件名", '传值')
     * react: this.props."这里是父组件的方法事件名('传值')" / this.props["这里是父组件的方法事件名"] --> 对象的点语法与中括号语法
     */
    onFatherClick(val) {
        console.log(val)
        this.setState(data => ({
            isClick: !data.isClick,
            userMessage: data.isClick ? 'my name is 被子组件触发了父组件中的 onFatherClick 方法。' : 'my name is ... 你又被改i回去了'
        }))
    }

    /**
     * 父组件调用子组件，与 vue 语法不相同，如 <myComponent ref="clickMe"></myComponent>
     * vue: this.$refs.clickMe["这里是子组件的方法事件名"],
     * react：this.refs.clickMe["这里是子组件的方法事件名"]
     */
    onFaterClick() {
        this.refs.clickMe.faterClick()
    }
    render() {
        let style = { "color": "red", "cursor": "pointer" };
        return (
            <div>
                <p onClick={this.onFaterClick.bind(this)} style={style}>hello man</p>
                {this.props.name}
                <Init lyts={this.state.userMessage} />
                <TestOne triggerFather={this.onFatherClick.bind(this)} ref="clickMe" />
                <TestTwo />
                <Suspense fallback={<div>Loading...</div>}>
                    <TestFour />
                </Suspense>
            </div>
        )
    }
}

export default Test