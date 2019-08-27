import React from 'react'
import UserGist from './test3'

class TestTwo extends React.Component {
    render() {
        return (
            <div>
                github:
                <UserGist source="https://api.github.com/users/octocat/gists" />
            </div>
        )
    }
}

export default TestTwo