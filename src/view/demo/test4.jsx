import React from 'react'

export default class TestFour extends React.Component {
    constructor(props) {
        super(props)
        this.textInput = React.createRef()
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