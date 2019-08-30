import React from 'react'
// import Axios from 'axios'

class UserGist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            userArr: []
        }
    }
    componentDidMount() {
        // Axios.get(this.props.source).then(res => {
        //     this.setState({
        //         userArr: res.data
        //     })
        // })
    }
    render() {
        return (
            <div className="test3">
                {
                    this.state.userArr.map((v, k) => {
                        return (
                            <div key={k}>
                                <a href={v.url}>{v.html_url}</a>
                                <div>时间：{v.created_at}</div>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

export default UserGist