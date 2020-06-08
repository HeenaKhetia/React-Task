import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Header.scss'

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
             title: 'Titles'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            if ((this.state.title !== 'Movies') && (window.location.href.includes('movies'))) {
                this.setState({
                    title: 'Movies'
                })
            } else if ((this.state.title !== 'Series') && (window.location.href.includes('series'))) {
                this.setState({
                    title: 'Series'
                })
            } else if ((!window.location.href.includes('movies')) && (!window.location.href.includes('series'))) {
                this.setState({
                    title: 'Titles'
                })
            }
        }, 10);
    }
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark navbar-expand-lg bg-primary white-txt flex-container flex-space-between demo">
                
                    <h4 className="bold-font"><NavLink className="cardlink" to="/">DEMO Streaming</NavLink></h4>
                
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <a className="white-txt login" href="#">Login</a>
                        <button className="btn btn-dark my-2 my-sm-0 login" type="submit">Start your free trial</button>
                    </div>
                </nav>
                <nav className="navbar navbar-dark black-bg white-txt flex-container flex-space-between demo">
                    <h5 className="">Popular {this.state.title}</h5>
                </nav>
            </React.Fragment>
        )
    }
}

export default Header
