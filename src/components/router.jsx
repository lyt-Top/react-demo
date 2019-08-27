import React from 'react'
import { withRouter } from 'react-router-dom'

class Router extends React.Component {
    onCurrenClick(path) {
        this.props.history.push({
            pathname: path
        })
    }

    render() {
        return (
            <div>
                <ul>
                    <li onClick={() => this.onCurrenClick('/')}>Home</li>
                    <li onClick={() => this.onCurrenClick('/cs/123456/789')}>Csasd</li>
                </ul>
            </div>
        )
    }
}

export default withRouter(Router)