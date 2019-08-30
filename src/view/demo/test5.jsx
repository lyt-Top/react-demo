import React from 'react'

export default class TestFour extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }
    render() {
        return (
            <div className="warps">
                <div className="left"></div>
                <div className="center"></div>
                <div className="right"></div>
            </div>
        )
    }
}