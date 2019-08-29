import React from 'react'

export default class yellowTab extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            numArr: []
        }
    }

    componentWillMount() {
        let { numArr = [] } = this.state
        for (let i = 0; i < 50; i++) {
            numArr.push(`My-${i}`)
        }
        this.setState({ numArr })
    }

    render() {
        let style = {
            paddingBottom: '50px'
        }
        return (
            <div style={style}>
                {
                    this.state.numArr.map((item, index) => {
                        return (
                            <div key={index}>{item}</div>
                        )
                    })
                }
            </div>
        )
    }
}