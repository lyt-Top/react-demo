import React from 'react'
import '../../assets/style/test1.css'

class TestOne extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
            arr: [
                {
                    label: '01',
                    value: 'value1'
                },
                {
                    label: '02',
                    value: 'value2'
                }
            ]
        }
    }
    onCellClick(data, index) {
        let { arr = [] } = this.state
        arr[index]['value'] = data.label
        this.setState({
            arr
        })
    }
    faterClick() {
        console.log("我是子组件的方法，我被父组件的点击事件触发了...")
    }
    childrenClick(arr) {
        this.props.triggerFather({
            arr: arr,
            msg: '我是子组件，我再向父组件传值...'
        })
    }
    render() {
        let style = { "color": "red", "cursor": "pointer" };
        return (
            <div className="warp">
                <div onClick={this.childrenClick.bind(this, this.state.arr)}>现在是：{this.state.date.toLocaleTimeString()} <span style={style}>《click me !》</span></div>
                <ul>
                    {
                        this.state.arr.map((item, key) => {
                            return (
                                <li key={key} onClick={this.onCellClick.bind(this, item, key)}>{item.value}</li>
                            )
                        })
                    }
                </ul>
            </div >
        )
    }
}

export default TestOne