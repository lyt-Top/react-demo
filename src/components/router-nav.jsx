import React from 'react'
import { NavLink } from 'react-router-dom'

export default class Router extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isSelect: 0
        }
    }
    componentDidMount() {
        if (sessionStorage.getItem("navIndex")) {
            this.setState({
                isSelect: Number.parseInt(sessionStorage.getItem("navIndex"))
            });
        }
    }
    onSetCur(index) {
        sessionStorage.setItem('navIndex', index)
        this.setState({
            isSelect: Number.parseInt(index)
        });
    }
    render() {
        let navs = [
            {
                path: "/",
                name: 'Home'
            },
            {
                path: "/cs/123456/789",
                name: 'Csasd'
            }
        ]
        return (
            <div>
                <ul className="nav">
                    {
                        navs.map((item, index) => {
                            return (
                                <li key={index} index={index} className={this.state.isSelect === index ? 'activeted' : ''} onClick={() => this.onSetCur(index)}>
                                    <NavLink to={item.path}>{item.name}</NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }
}

// export default withRouter(Router)


// onCurrenClick(path) {
//     this.props.history.push({
//         pathname: path
//     })
// }

// <li onClick={() => this.onCurrenClick('/')}>Home</li>
// <li onClick={() => this.onCurrenClick('/cs/123456/789')}>Csasd</li>

// <li><NavLink to="/">Home</NavLink></li>
// <li><NavLink to="/cs/123456/789">Csasd</NavLink></li>