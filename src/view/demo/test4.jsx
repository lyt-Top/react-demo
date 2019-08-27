import React from 'react'

export default class TestFour extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
    }
    componentWillMount() {
        console.log(111111111111)
    }
    componentDidMount() {
        console.log(222222222222)
    }
    onFocusTextInput() {
        this.textInput.current.focus()
    }
    render() {
        return (
            <div>
                <input type="text" ref={this.textInput} />
                <input
                    type="button"
                    value="Focus the text input"
                    onClick={(e) => this.onFocusTextInput(e)}
                    className="input"
                />
            </div>
        )
    }
}